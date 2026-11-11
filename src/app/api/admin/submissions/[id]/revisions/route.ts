
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    const admin = await prisma.adminUser.findUnique({
      where: { id: session.id },
      select: { active: true }
    });

    if (!admin?.active) {
      return NextResponse.json(
        { error: "Your admin account is inactive." },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const editorComments =
      typeof body.editorComments === "string"
        ? body.editorComments.trim()
        : "";

    if (!editorComments) {
      return NextResponse.json(
        { error: "Revision instructions are required." },
        { status: 400 }
      );
    }

    if (editorComments.length > 10000) {
      return NextResponse.json(
        { error: "Instructions cannot exceed 10,000 characters." },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.findUnique({
      where: { id },
      select: {
        id: true,
        status: true,
        decision: true
      }
    });

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    if (
      submission.status !== "REVISION_REQUIRED" ||
      !["MINOR_REVISION", "MAJOR_REVISION"].includes(
        submission.decision || ""
      )
    ) {
      return NextResponse.json(
        { error: "This submission does not have an active revision decision." },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.revision.findMany({
        where: { submissionId: id },
        select: { round: true, status: true }
      });

      if (existing.some((revision) => revision.status === "REQUESTED")) {
        throw new Error("REVISION_REQUEST_ALREADY_EXISTS");
      }

      const nextRound =
        existing.reduce(
          (maximum, revision) => Math.max(maximum, revision.round),
          0
        ) + 1;

      return tx.revision.create({
        data: {
          submissionId: id,
          round: nextRound,
          decision: submission.decision!,
          status: "REQUESTED",
          editorComments
        }
      });
    });

    return NextResponse.json({
      success: true,
      revision: result
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "REVISION_REQUEST_ALREADY_EXISTS"
    ) {
      return NextResponse.json(
        { error: "An outstanding revision request already exists." },
        { status: 409 }
      );
    }

    console.error("Revision request error:", error);

    return NextResponse.json(
      { error: "Unable to create the revision request." },
      { status: 500 }
    );
  }
}
