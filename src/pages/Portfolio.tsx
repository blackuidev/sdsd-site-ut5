import React from 'react';
import { ShinyText } from '@/components/ui/shiny-text';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A cutting-edge web application built with React and Node.js.",
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "An interactive data visualization tool using D3.js.",
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A mobile-first e-commerce platform developed with Next.js.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center p-8 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="z-10 max-w-3xl">
          <ShinyText text="Hi, I'm Lightswind" className="text-6xl md:text-8xl font-bold mb-4" />
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            A full-stack developer crafting beautiful and performant web experiences.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            View My Work
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for project image/details */}
                <div className="h-40 bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
                  Project Image Placeholder
                </div>
              </CardContent>
              <CardFooter>
                <Link to={project.link} className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-2 bg-gray-800 border-gray-700 text-white" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-2 bg-gray-800 border-gray-700 text-white" />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={5} className="mt-2 bg-gray-800 border-gray-700 text-white" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
