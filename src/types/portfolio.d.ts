export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string; // URL or path to image
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}
