
export type Article = {
  slug: string;
  type: string;
  title: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  volume: number;
  issue: number;
  year: number;
  published: string;
  doi?: string;
  pdfUrl?: string;
};

export const articles: Article[] = [];
