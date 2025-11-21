import { useParams } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { portfolioProjects } from '../data/portfolio-projects';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <RootLayout>
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">The project you are looking for does not exist.</p>
          <Link to="/projects" className="mt-8 inline-flex items-center text-blue-600 hover:underline dark:text-blue-400">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <Link to="/projects" className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
        {project.title}
      </h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        {project.description}
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            />
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            {project.liveLink && (
              <Button asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button asChild variant="outline">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Project Overview
          </h2>
          <p className="text-lg">
            This section would contain a more detailed description of the project, including its goals, challenges faced, technologies used in depth, and solutions implemented.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* Add more details, bullet points, or sections as needed */}
        </div>
      </div>
    </RootLayout>
  );
}