
import Link from "next/link";

type AdminNavigationProps = {
  active: "dashboard" | "submissions" | "publications";
};

const navigationGroups = [
  {
    label: "WORKSPACE",
    items: [
      { label: "Overview", href: "/admin/dashboard", key: "dashboard" },
      { label: "Submissions", href: "/admin/submissions", key: "submissions" },
      { label: "Publish article", href: "/admin/publications", key: "publications" },
    ],
  },
];

const upcomingGroups = [
  {
    label: "PUBLICATION TOOLS",
    items: ["Bulk article editing", "Volume management"],
  },
  {
    label: "JOURNAL MANAGEMENT",
    items: ["Editorial Board", "Announcements", "APC & Payments"],
  },
  {
    label: "ADMINISTRATION",
    items: ["Activity Log", "Journal Settings"],
  },
];

export default function AdminNavigation({
  active,
}: AdminNavigationProps) {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <span className="admin-sidebar-mark">J</span>
        <div>
          <strong>JPSTA</strong>
          <span>Administration</span>
        </div>
      </div>

      <nav aria-label="Administration navigation">
        {navigationGroups.map((group) => (
          <div className="admin-nav-group" key={group.label}>
            <span className="admin-nav-heading">{group.label}</span>

            {group.items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`admin-nav-link ${
                  active === item.key ? "active" : ""
                }`}
                aria-current={active === item.key ? "page" : undefined}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">›</span>
              </Link>
            ))}
          </div>
        ))}

        {upcomingGroups.map((group) => (
          <div className="admin-nav-group" key={group.label}>
            <span className="admin-nav-heading">{group.label}</span>

            {group.items.map((item) => (
              <div className="admin-nav-link disabled" key={item}>
                <span>{item}</span>
                <span className="admin-nav-soon">Soon</span>
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <span>JPSTA Journal Management</span>
        <span>Administration Portal</span>
      </div>
    </aside>
  );
}
