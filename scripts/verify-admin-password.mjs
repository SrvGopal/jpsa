
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "umeshmitul@gmail.com";
  const password = process.env.ADMIN_TEST_PASSWORD;

  if (!password) throw new Error("Password not provided.");

  const admin = await prisma.adminUser.findUnique({
    where: { email },
  });

  if (!admin) {
    console.log("RESULT: ADMIN NOT FOUND");
    return;
  }

  console.log("Admin found:", admin.email);
  console.log("Account active:", admin.active);

  const matches = await bcrypt.compare(password, admin.passwordHash);

  console.log(
    matches
      ? "RESULT: PASSWORD MATCHES DATABASE"
      : "RESULT: PASSWORD DOES NOT MATCH DATABASE"
  );
}

main()
  .catch((error) => console.error(error.message))
  .finally(async () => await prisma.$disconnect());
