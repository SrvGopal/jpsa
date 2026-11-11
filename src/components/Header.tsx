
import Image from "next/image";
import Link from "next/link";
import { journal } from "@/config/journal";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Editorial Board", href: "/about/editorial-board" },
  { label: "For Authors", href: "/authors" },
  { label: "Articles", href: "/articles" },
  { label: "Issues", href: "/issues" },
  { label: "Policies", href: "/policies" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">

        <Link href="/" className="brand">
          <Image
            src="/logo/jpsa-emblem.png"
            alt="JPSA Journal Emblem"
            width={64}
            height={64}
            className="brand-logo"
            priority
          />

          <span className="brand-name">
            {journal.name}
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/search" className="search-link">
            Search
          </Link>

          <Link
            href="/authors/submission-process"
            className="button button-dark"
          >
            Submit Manuscript
          </Link>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>

            <nav aria-label="Mobile navigation">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}

              <Link href="/search">Search Publications</Link>

              <Link href="/authors/submission-process">
                Submit Manuscript
              </Link>
            </nav>
          </details>
        </div>

      </div>
    </header>
  );
}
