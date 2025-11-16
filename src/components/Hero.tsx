import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-lg font-mono">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text">
              MERN Stack Developer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building full-stack web applications with MongoDB, Express.js, React.js, and Node.js
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="hover-lift">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-lift">
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about">
              <ArrowDown className="mx-auto text-primary" size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
