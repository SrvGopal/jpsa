
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const prisma = new PrismaClient();

async function ask(question) {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(question);
  rl.close();
  return answer.trim();
}

async function askPassword() {
  if (!stdin.isTTY || !stdin.setRawMode) {
    return ask("Password: ");
  }

  return new Promise((resolve, reject) => {
    stdout.write("Password (input hidden): ");
    let password = "";

    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    function cleanup() {
      stdin.setRawMode(false);
      stdin.pause();
      stdin.removeListener("data", handleInput);
    }

    function handleInput(char) {
      if (char === "\u0003") {
        cleanup();
        stdout.write("\n");
        reject(new Error("Cancelled."));
        return;
      }

      if (char === "\r" || char === "\n") {
        cleanup();
        stdout.write("\n");
        resolve(password);
        return;
      }

      if (char === "\u007f" || char === "\b") {
        password = password.slice(0, -1);
        return;
      }

      if (char >= " ") {
        password += char;
      }
    }

    stdin.on("data", handleInput);
  });
}

async function main() {
  console.log("\nJPSA — Create Owner Account\n");

  const name = await ask("Owner name: ");
  const email = (await ask("Owner email: ")).toLowerCase();
  const password = await askPassword();

  if (!name || !email || !email.includes("@")) {
    throw new Error("Enter a valid name and email.");
  }

  if (password.length < 12) {
    throw new Error("Password must contain at least 12 characters.");
  }

  const existing = await prisma.adminUser.findUnique({
    where: { email }
  });

  if (existing) {
    throw new Error("An account with this email already exists.");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.adminUser.create({
    data: {
      name,
      email,
      passwordHash,
      role: "OWNER",
      active: true
    }
  });

  console.log("\nOwner account created successfully.");
  console.log(`Email: ${admin.email}`);
  console.log("Role: OWNER");
}

main()
  .catch((error) => {
    console.error("\nError:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
