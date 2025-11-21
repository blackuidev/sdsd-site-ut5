import { Link } from "react-router-dom";
import { Project } from "../../types/portfolio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 pt-0">
        {project.tags?.map((tag, index) => (
          <Badge key={index} variant="secondary" className="px-2 py-0.5 text-xs">
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/projects/${project.id}`} className="inline-flex items-center justify-center">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}