import React from 'react';
import { PortfolioHero } from '../components/portfolio/PortfolioHero';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { portfolioProjects } from '../data/portfolio-projects';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';

const PortfolioPage: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement contact form submission logic here
    alert('Message sent! (This is a dummy submission)');
  };

  const skills = [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
    "Tailwind CSS", "Shadcn UI", "MongoDB", "PostgreSQL", "Git", "Docker",
    "AWS", "Firebase", "Figma", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioHero
        name="[Your Name]"
        tagline="Building innovative web experiences with a passion for design and functionality."
        description="I am a passionate software engineer specializing in full-stack development, dedicated to crafting high-quality, scalable, and user-friendly applications. Explore my work below!"
        ctaText="View My Projects"
        onCtaClick={scrollToProjects}
      />

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/600x400/1E293B/E2E8F0?text=Your+Photo"
              alt="Your Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Hello! I'm [Your Name], a dedicated Full Stack Developer with X years of experience
              in building robust and scalable web applications. My journey in tech started with a
              fascination for how software can solve real-world problems and enhance user experiences.
            </p>
            <p className="mb-4">
              I thrive on learning new technologies and am always looking for opportunities to
              push the boundaries of what's possible. From crafting pixel-perfect UIs to
              designing efficient backend systems, I love every aspect of the development process.
            </p>
            <p>
              When I'm not coding, you can find me [mention a hobby, e.g., exploring new hiking trails,
              reading sci-fi novels, or experimenting with new recipes].
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">My Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-full">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge key={index} variant="default" className="text-base px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <Label htmlFor="name" className="text-lg mb-2 block">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="md:col-span-1">
              <Label htmlFor="email" className="text-lg mb-2 block">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="subject" className="text-lg mb-2 block">Subject</Label>
              <Input id="subject" type="text" placeholder="Subject of your message" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message" className="text-lg mb-2 block">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={5} className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="md:col-span-2 text-center">
              <Button type="submit" className="px-10 py-4 text-xl font-bold bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
