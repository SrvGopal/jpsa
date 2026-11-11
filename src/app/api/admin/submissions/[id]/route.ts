
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

const allowedTransitions: Record<string, string[]> = {
  RECEIVED: ["SCREENING"],
  SCREENING: ["UNDER_REVIEW"],
  UNDER_REVIEW: ["REVISION_REQUIRED"],
  REVISION_REQUIRED: ["UNDER_REVIEW"],
  ACCEPTED: [],
  REJECTED: []
};

export async function PATCH(
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
      select: { id: true, active: true }
    });

    if (!admin?.active) {
      return NextResponse.json(
        { error: "Your admin account is inactive." },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const requestedStatus =
      typeof body.status === "string" ? body.status : "";

    const editorNotes =
      typeof body.editorNotes === "string" ? body.editorNotes : "";

    if (editorNotes.length > 10000) {
      return NextResponse.json(
        { error: "Editorial notes cannot exceed 10,000 characters." },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.findUnique({
      where: { id },
      select: { id: true, status: true }
    });

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    const validNextStatuses = allowedTransitions[submission.status] || [];

    if (
      requestedStatus !== submission.status &&
      !validNextStatuses.includes(requestedStatus)
    ) {
      return NextResponse.json(
        { error: "This editorial status transition is not allowed." },
        { status: 400 }
      );
    }

    const updated = await prisma.submission.update({
      where: { id },
      data: {
        status: requestedStatus || submission.status,
        editorNotes,
        ...(requestedStatus === "ACCEPTED" ||
        requestedStatus === "REJECTED"
          ? {
              decision: requestedStatus,
              decisionDate: new Date()
            }
          : {})
      },
      select: {
        id: true,
        status: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      success: true,
      submission: updated
    });
  } catch (error) {
    console.error("Submission update error:", error);

    return NextResponse.json(
      { error: "Unable to update this submission." },
      { status: 500 }
    );
  }
}
