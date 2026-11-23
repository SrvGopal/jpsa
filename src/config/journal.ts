
import { journalInfo } from "@/lib/journal-content";

export const journal = {
  name: "Journal of Physical Sciences and Technological Advances",
  shortName: "JPSTA",

  // Retained to preserve the existing website and email addresses.
  domain: "jpsa-journal.org.in",
  email: "editor@jpsa-journal.org.in",

  description:
     "An interdisciplinary, peer-reviewed scholarly journal publishing original research across the approved sciences, engineering and technology disciplines.",

  publicationFrequency: "Monthly",

  accessModel: "Open access",

  publicationStatus: "Active",

  publisher: null as string | null,

  issn: null as string | null,
  eIssn: null as string | null,

  doiRegistration: "Not yet configured",

  firstPublication: null as string | null,

  copyrightYear: new Date().getFullYear(),

  manuscriptSubmission: {
    enabled: false,
    message:
      "Authors may submit manuscripts to the JPSTA Editorial Office by email at editor@jpsa-journal.org.in."
  },

  contact: {
    editorial: "editor@jpsa-journal.org.in",
    technical: null as string | null
  }
};


export const researchAreas = journalInfo.subjectAreas.map(({ title }) => title);


export const journalNavigation = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Issues", href: "/issues" },
  { label: "About", href: "/about" },
  { label: "Editorial Board", href: "/about/editorial-board" },
  { label: "For Authors", href: "/authors" },
  { label: "Policies", href: "/policies" }
];
