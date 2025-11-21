import RootLayout from "../layouts/RootLayout";
import HeroSection from "../components/common/HeroSection";
import { portfolioProjects } from "../data/portfolio-projects";
import ProjectCard from "../components/portfolio/ProjectCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  const featuredProjects = portfolioProjects.slice(0, 3); // Display top 3 projects

  return (
    <RootLayout>
      <HeroSection
        title="Hi, I'm [Your Name/Company Name]"
        subtitle="Crafting immersive digital experiences with passion and precision."
        description="I specialize in building modern web applications, focusing on clean code, responsive design, and user-centric interfaces. Let's create something amazing together."
        ctaText="View My Work"
        ctaLink="/projects"
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out and discuss your ideas.
          </p>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </RootLayout>
  );
}