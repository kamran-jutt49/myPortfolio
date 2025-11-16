import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Built with <Heart size={16} className="text-accent" fill="currentColor" /> using MERN Stack
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MERN Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
