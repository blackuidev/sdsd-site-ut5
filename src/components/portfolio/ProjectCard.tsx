import React from 'react';
import { PortfolioProject } from '../../types/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="px-2 py-0.5 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-4 pt-0">
        {project.liveLink && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.githubLink && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
