import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux',
        'Next.js',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Socket.io',
        'JWT',
        'Passport.js',
      ],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman', 'VS Code', 'NPM', 'Webpack'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-lift space-y-6"
            >
              <h3 className="text-xl font-bold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
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
