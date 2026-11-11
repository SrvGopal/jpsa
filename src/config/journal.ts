
export const journal = {
  name: "Journal of Physical Sciences Advances",
  shortName: "JPSA",

  domain: "jpsa-journal.org.in",
  email: "editor@jpsa-journal.org.in",

  description:
    "A scholarly journal dedicated to research, analysis and advances across physics and the physical sciences.",

  publicationFrequency: "Monthly",

  accessModel: "Subscription",

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
      "The online manuscript submission system is not yet available. Please consult the author information section."
  },

  contact: {
    editorial: "editor@jpsa-journal.org.in",
    technical: null as string | null
  }
};

export const researchAreas = [
  "Theoretical Physics",
  "Applied Physics",
  "Condensed Matter Physics",
  "Materials Physics",
  "Optics and Photonics",
  "Computational Physics",
  "Nuclear and Particle Physics",
  "Interdisciplinary Physical Sciences"
];

export const journalNavigation = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Issues", href: "/issues" },
  { label: "About", href: "/about" },
  { label: "Editorial Board", href: "/about/editorial-board" },
  { label: "For Authors", href: "/authors" },
  { label: "Policies", href: "/policies" }
];
