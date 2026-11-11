
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

const REVIEW_STATUSES = [
  "INVITED",
  "ACCEPTED",
  "DECLINED",
  "COMPLETED",
] as const;

const RECOMMENDATIONS = [
  "ACCEPT",
  "MINOR_REVISION",
  "MAJOR_REVISION",
  "REJECT",
] as const;

async function verifyAdmin() {
  const session = await getAdminSession();

  if (!session) return false;

  const admin = await prisma.adminUser.findUnique({
    where: { id: session.id },
    select: { active: true },
  });

  return Boolean(admin?.active);
}

// Assign a reviewer to a submission.
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json(
        { error: "Authentication required or admin inactive." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!name || name.length > 150) {
      return NextResponse.json(
        { error: "Enter a valid reviewer name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Enter a valid reviewer email." },
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

    if (["ACCEPTED", "REJECTED"].includes(submission.status)) {
      return NextResponse.json(
        { error: "Cannot assign reviewers to a finalised submission." },
        { status: 400 }
      );
    }

    const existingReview = await prisma.review.findFirst({
      where: { submissionId: id, reviewerEmail: email },
    });

    if (existingReview) {
      return NextResponse.json(
        { error: "This reviewer is already assigned." },
        { status: 409 }
      );
    }

    const review = await prisma.review.create({
      data: {
        submissionId: id,
        reviewerName: name,
        reviewerEmail: email,
        status: "INVITED",
      },
    });

    return NextResponse.json({ success: true, reviewer: review });
  } catch (error) {
    console.error("Reviewer assignment error:", error);

    return NextResponse.json(
      { error: "Unable to assign reviewer." },
      { status: 500 }
    );
  }
}

// Update a reviewer's status and recorded feedback.
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await verifyAdmin())) {
      return NextResponse.json(
        { error: "Authentication required or admin inactive." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const reviewId =
      typeof body.reviewId === "string" ? body.reviewId : "";

    if (!reviewId) {
      return NextResponse.json(
        { error: "Reviewer record ID is required." },
        { status: 400 }
      );
    }

    const existing = await prisma.review.findFirst({
      where: { id: reviewId, submissionId: id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Reviewer record not found." },
        { status: 404 }
      );
    }

    const status =
      typeof body.status === "string" ? body.status : existing.status;

    const recommendation =
      body.recommendation === null
        ? null
        : typeof body.recommendation === "string"
          ? body.recommendation
          : existing.recommendation;

    const confidentialComments =
      typeof body.confidentialComments === "string"
        ? body.confidentialComments.trim()
        : existing.confidentialComments;

    const authorComments =
      typeof body.authorComments === "string"
        ? body.authorComments.trim()
        : existing.authorComments;

    if (!REVIEW_STATUSES.includes(status as (typeof REVIEW_STATUSES)[number])) {
      return NextResponse.json(
        { error: "Invalid review status." },
        { status: 400 }
      );
    }

    if (
      recommendation !== null &&
      !RECOMMENDATIONS.includes(
        recommendation as (typeof RECOMMENDATIONS)[number]
      )
    ) {
      return NextResponse.json(
        { error: "Invalid reviewer recommendation." },
        { status: 400 }
      );
    }

    if (
      confidentialComments.length > 10000 ||
      authorComments.length > 10000
    ) {
      return NextResponse.json(
        { error: "Review comments cannot exceed 10,000 characters." },
        { status: 400 }
      );
    }

    if (status === "COMPLETED" && !recommendation) {
      return NextResponse.json(
        { error: "Select a recommendation before marking the review completed." },
        { status: 400 }
      );
    }

    const updated = await prisma.review.update({
      where: { id: reviewId },
      data: {
        status,
        recommendation,
        confidentialComments,
        authorComments,
        submittedAt:
          status === "COMPLETED"
            ? existing.submittedAt || new Date()
            : existing.submittedAt,
      },
    });

    return NextResponse.json({
      success: true,
      reviewer: updated,
    });
  } catch (error) {
    console.error("Reviewer update error:", error);

    return NextResponse.json(
      { error: "Unable to update reviewer record." },
      { status: 500 }
    );
  }
}
