-- CreateTable
CREATE TABLE "Revision" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "round" INTEGER NOT NULL,
    "decision" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'REQUESTED',
    "editorComments" TEXT NOT NULL,
    "authorResponse" TEXT,
    "manuscriptUrl" TEXT,
    "submittedAt" TIMESTAMP(3),
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Revision_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Revision_submissionId_status_idx" ON "Revision"("submissionId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Revision_submissionId_round_key" ON "Revision"("submissionId", "round");

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
