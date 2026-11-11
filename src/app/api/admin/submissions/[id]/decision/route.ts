
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

const decisions = {
  ACCEPT: "ACCEPTED",
  MINOR_REVISION: "REVISION_REQUIRED",
  MAJOR_REVISION: "REVISION_REQUIRED",
  REJECT: "REJECTED",
} as const;

type Decision = keyof typeof decisions;

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
      select: { id: true, active: true },
    });

    if (!admin?.active) {
      return NextResponse.json(
        { error: "Your admin account is inactive." },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const decision = body.decision as Decision;
    const reason =
      typeof body.reason === "string" ? body.reason.trim() : "";

    if (!Object.prototype.hasOwnProperty.call(decisions, decision)) {
      return NextResponse.json(
        { error: "Select a valid editorial decision." },
        { status: 400 }
      );
    }

    if (!reason || reason.length > 10000) {
      return NextResponse.json(
        { error: "A valid decision reason is required." },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.findUnique({
      where: { id },
      select: { id: true, status: true },
    });

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    if (
      !["SCREENING", "UNDER_REVIEW", "REVISION_REQUIRED"].includes(
        submission.status
      )
    ) {
      return NextResponse.json(
        { error: "A formal decision cannot be recorded at this stage." },
        { status: 400 }
      );
    }

    if (
      decision !== "REJECT" &&
      submission.status === "SCREENING"
    ) {
      return NextResponse.json(
        {
          error:
            "Acceptance or revision decisions require the submission to enter peer review.",
        },
        { status: 400 }
      );
    }

    const updated = await prisma.submission.update({
      where: { id },
      data: {
        status: decisions[decision],
        decision,
        decisionReason: reason,
        decisionDate: new Date(),
      },
      select: {
        id: true,
        status: true,
        decision: true,
        decisionReason: true,
        decisionDate: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      submission: updated,
    });
  } catch (error) {
    console.error("Editorial decision error:", error);

    return NextResponse.json(
      { error: "Unable to record the editorial decision." },
      { status: 500 }
    );
  }
}
