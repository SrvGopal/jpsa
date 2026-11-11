
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      router.replace("/admin/login");
      router.refresh();
    } catch {
      alert("Unable to log out. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      className="admin-logout-button"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
