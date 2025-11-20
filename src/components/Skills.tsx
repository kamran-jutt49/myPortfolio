import { Badge } from '@/components/ui/badge';
import { Code2, Database, Server, Zap } from 'lucide-react';
export const Skills = () => {
const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive UIs with React.js',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs with Node.js and Express.js',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing scalable databases with MongoDB',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">MERN Stack Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {tech[0]}
                  </div>
                  <p className="font-semibold text-foreground">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
