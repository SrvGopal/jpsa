import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { storage, STORAGE_BUCKET } from "@/lib/storage";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

    const admin = await prisma.adminUser.findUnique({
      where: { id: session.id },
      select: { active: true },
    });
    if (!admin?.active) return NextResponse.json({ error: "Your admin account is inactive." }, { status: 403 });

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File) || file.size <= 0 || file.size > MAX_FILE_SIZE || file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
      return NextResponse.json({ error: "Choose a PDF file smaller than 20 MB." }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    if (bytes.subarray(0, 5).toString("ascii") !== "%PDF-") {
      return NextResponse.json({ error: "The selected file does not appear to be a valid PDF." }, { status: 400 });
    }

    const path = `published/${randomUUID()}.pdf`;
    const { error } = await storage.storage.from(STORAGE_BUCKET).upload(path, bytes, {
      contentType: "application/pdf",
      upsert: false,
    });

    if (error) {
      console.error("Published PDF upload error:", error);
      return NextResponse.json({ error: "Unable to upload the publication PDF." }, { status: 500 });
    }

    return NextResponse.json({ success: true, path, fileName: file.name, size: file.size });
  } catch (error) {
    console.error("Publication PDF upload failed:", error);
    return NextResponse.json({ error: "Unable to upload the publication PDF." }, { status: 500 });
  }
}
