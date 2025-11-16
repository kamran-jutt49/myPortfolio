import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'A real-time messaging app with Socket.io for instant communication, user authentication, and message history stored in MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management System',
      description:
        'A collaborative project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'React DnD', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A social media analytics dashboard with data visualization, user engagement metrics, and API integrations for multiple platforms.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'REST APIs'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A full-stack blogging platform with markdown support, user authentication, comments system, and SEO optimization.',
      techStack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Markdown'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Forecast App',
      description:
        'A weather application with real-time forecasts, location-based searches, and interactive maps using external weather APIs.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Weather API', 'Maps API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in building full-stack MERN applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-lift space-y-4 flex flex-col"
            >
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="text-muted-foreground flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
