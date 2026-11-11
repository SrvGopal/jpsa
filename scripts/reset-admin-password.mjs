
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_NEW_PASSWORD;

  if (!email || !password) {
    throw new Error("Email or password is missing.");
  }

  if (password.length < 12 || password.length > 200) {
    throw new Error("Password must contain 12–200 characters.");
  }

  const admin = await prisma.adminUser.findUnique({
    where: { email },
  });

  if (!admin) {
    throw new Error("Admin account not found.");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.update({
    where: { email },
    data: { passwordHash },
  });

  // Read the updated record back from the database.
  const updatedAdmin = await prisma.adminUser.findUnique({
    where: { email },
  });

  const matches = await bcrypt.compare(
    password,
    updatedAdmin.passwordHash
  );

  console.log("Admin:", updatedAdmin.email);
  console.log("Active:", updatedAdmin.active);
  console.log("Password verification:", matches);

  if (!matches) {
    throw new Error("Password verification failed after reset.");
  }

  console.log("SUCCESS: Password reset and verified.");
}

main()
  .catch((error) => {
    console.error("ERROR:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
