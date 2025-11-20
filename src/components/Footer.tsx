import { Github, Linkedin, Mail} from 'lucide-react';

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

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Muhammad Kamran Imtiaz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
