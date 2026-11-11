
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { storage, STORAGE_BUCKET } from "@/lib/storage";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const fileName =
      typeof body.fileName === "string" ? body.fileName : "";

    const contentType =
      typeof body.contentType === "string" ? body.contentType : "";

    const fileSize =
      typeof body.fileSize === "number" ? body.fileSize : 0;

    if (
      !fileName ||
      fileName.length > 255 ||
      !fileName.toLowerCase().endsWith(".pdf") ||
      contentType !== "application/pdf" ||
      !Number.isSafeInteger(fileSize) ||
      fileSize <= 0 ||
      fileSize > MAX_FILE_SIZE
    ) {
      return NextResponse.json(
        { error: "Upload a PDF file smaller than 20 MB." },
        { status: 400 }
      );
    }

    const path = `incoming/${randomUUID()}.pdf`;

    const { data, error } = await storage.storage
      .from(STORAGE_BUCKET)
      .createSignedUploadUrl(path);

    if (error || !data) {
      console.error("Supabase upload authorization error:", error);

      return NextResponse.json(
        { error: "Unable to prepare your file upload." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      path,
      token: data.token
    });
  } catch (error) {
    console.error("Upload authorization error:", error);

    return NextResponse.json(
      { error: "Unable to prepare your upload." },
      { status: 500 }
    );
  }
}
