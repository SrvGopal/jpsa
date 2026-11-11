
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { destroyAdminSession, getAdminSession } from "@/lib/auth";

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const admin = await prisma.adminUser.findUnique({
    where: { id: session.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      active: true
    }
  });

  if (!admin || !admin.active) {
    await destroyAdminSession();
    redirect("/admin/login");
  }

  return admin;
}
