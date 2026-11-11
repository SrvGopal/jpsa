
import Image from "next/image";
import Link from "next/link";

import { journal } from "@/config/journal";

const currentYear = new Date().getFullYear();

const footerGroups = [
  {
    title: "The Journal",
    links: [
      { label: "About JPSA", href: "/about" },
      { label: "Aims and Scope", href: "/about/aims-and-scope" },
      { label: "Journal Information", href: "/about/journal-information" },
      { label: "Editorial Board", href: "/about/editorial-board" },
      { label: "Articles", href: "/articles" },
      { label: "Issues and Archives", href: "/issues" }
    ]
  },
  {
    title: "For Authors",
    links: [
      { label: "Author Guidelines", href: "/authors/guidelines" },
      { label: "Manuscript Preparation", href: "/authors/manuscript-preparation" },
      { label: "Submission Process", href: "/authors/submission-process" },
      { label: "Peer Review", href: "/authors/peer-review" },
      { label: "APC Information", href: "/apc" }
    ]
  },
  {
    title: "Policies",
    links: [
      { label: "Publication Ethics", href: "/policies/publication-ethics" },
      { label: "Authorship", href: "/policies/authorship" },
      { label: "Plagiarism", href: "/policies/plagiarism" },
      { label: "Conflict of Interest", href: "/policies/conflicts-of-interest" },
      { label: "Copyright", href: "/policies/copyright" },
      { label: "Corrections and Retractions", href: "/policies/corrections-and-retractions" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* JOURNAL IDENTITY */}

          <div className="footer-identity">
            <Link href="/" className="footer-logo">
              <Image
                src="/logo/jpsa-emblem.png"
                alt="JPSA emblem"
                width={66}
                height={66}
              />

              <span>
                {journal.shortName}
              </span>
            </Link>

            <h3 className="footer-journal-name">
              {journal.name}
            </h3>

            <p>
              A scholarly platform dedicated to research
              and advances across the physical sciences.
            </p>

            <p className="footer-motto">
              Research · Integrity · Knowledge
            </p>
          </div>

          {/* NAVIGATION GROUPS */}

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>

              <nav aria-label={group.title}>
                {group.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

        </div>

        {/* CONTACT AND STATUS */}

        <div className="footer-contact">
          <div>
            <span>Editorial correspondence</span>

            <a href={`mailto:${journal.contact.editorial}`}>
              {journal.contact.editorial}
            </a>
          </div>

          <div>
            <span>Publication status</span>
            <strong>Active</strong>
          </div>

          <div>
            <span>Access model</span>
            <strong>{journal.accessModel}</strong>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            © {currentYear} {journal.name}.
            All rights reserved.
          </p>

          <div>
            <Link href="/about/journal-information">
              Journal Information
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/policies/copyright">
              Copyright Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
