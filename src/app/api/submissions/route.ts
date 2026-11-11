import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const MAX_TEXT_LENGTH = 20000;

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucket = process.env.SUPABASE_STORAGE_BUCKET;

const supabase =
  supabaseUrl && serviceKey
    ? createClient(supabaseUrl, serviceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

async function storedFileExists(path: string) {
  if (!supabase || !bucket) {
    throw new Error("Supabase storage is not configured.");
  }

  if (!path.startsWith("incoming/")) {
    return false;
  }

  const fileName = path.split("/").pop();

  if (!fileName) return false;

  const { data, error } = await supabase.storage
    .from(bucket)
    .list("incoming", {
      search: fileName,
      limit: 100,
    });

  if (error) {
    throw new Error(`Storage verification failed: ${error.message}`);
  }

  return data?.some((file) => file.name === fileName) ?? false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const title =
      typeof body.title === "string" ? body.title.trim() : "";

    const authors =
      typeof body.authors === "string" ? body.authors.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const abstract =
      typeof body.abstract === "string"
        ? body.abstract.trim()
        : "";

    const keywords =
      typeof body.keywords === "string"
        ? body.keywords.trim()
        : "";

    const articleType =
      typeof body.articleType === "string"
        ? body.articleType
        : "Research Article";

    const manuscriptPath =
      typeof body.manuscriptPath === "string"
        ? body.manuscriptPath
        : "";

    const coverLetterPath =
      typeof body.coverLetterPath === "string"
        ? body.coverLetterPath
        : "";

    if (
      !title ||
      !authors ||
      !email ||
      !abstract ||
      !manuscriptPath
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields and upload your manuscript." },
        { status: 400 }
      );
    }

    if (
      title.length > 500 ||
      authors.length > 2000 ||
      abstract.length > MAX_TEXT_LENGTH ||
      keywords.length > 1000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the permitted length." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "Research Article",
      "Review Article",
      "Short Communication",
      "Case Study",
    ];

    if (!allowedTypes.includes(articleType)) {
      return NextResponse.json(
        { error: "Invalid article type." },
        { status: 400 }
      );
    }

    if (
      !/^incoming\/[a-f0-9-]+\.pdf$/i.test(manuscriptPath)
    ) {
      return NextResponse.json(
        { error: "Invalid manuscript upload reference." },
        { status: 400 }
      );
    }

    if (
      coverLetterPath &&
      !/^incoming\/[a-f0-9-]+\.pdf$/i.test(coverLetterPath)
    ) {
      return NextResponse.json(
        { error: "Invalid cover letter upload reference." },
        { status: 400 }
      );
    }

    const manuscriptExists =
      await storedFileExists(manuscriptPath);

    if (!manuscriptExists) {
      return NextResponse.json(
        { error: "The manuscript upload could not be verified. Please upload it again." },
        { status: 400 }
      );
    }

    if (
      coverLetterPath &&
      !(await storedFileExists(coverLetterPath))
    ) {
      return NextResponse.json(
        { error: "The cover letter upload could not be verified." },
        { status: 400 }
      );
    }

    const submission = await prisma.submission.create({
      data: {
        title,
        authors,
        email,
        abstract,
        keywords,
        articleType,
        manuscriptUrl: manuscriptPath,
        coverLetterUrl: coverLetterPath || null,
        status: "RECEIVED",
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        submissionId: submission.id,
        submittedAt: submission.createdAt,
        message: "Your manuscript has been received.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submission creation error:", error);

    return NextResponse.json(
      { error: "Unable to submit your manuscript right now. Please try again." },
      { status: 500 }
    );
  }
}