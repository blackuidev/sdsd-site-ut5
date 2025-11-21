import RootLayout from "../layouts/RootLayout";
import { portfolioProjects } from "../data/portfolio-projects";
import ProjectCard from "../components/portfolio/ProjectCard";
import PortfolioHero from "../components/portfolio/PortfolioHero"; // Re-using existing component

export default function ProjectsPage() {
  return (
    <RootLayout>
      <PortfolioHero
        title="My Creative Works"
        description="A collection of projects showcasing my skills and passion for development and design. Each project represents a unique challenge and learning experience."
      />
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}