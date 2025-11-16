import { Code2, Database, Server, Zap } from 'lucide-react';

export const About = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating seamless digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a dedicated MERN Stack Developer with a passion for building modern, scalable web
              applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I create
              full-stack solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development has equipped me with a strong foundation in both
              frontend and backend technologies. I believe in writing clean, maintainable code and
              staying updated with the latest industry trends and best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, learning new
              technologies, and sharing knowledge with the developer community.
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
        </div>
      </div>
    </section>
  );
};
