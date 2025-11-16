import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Senior MERN Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: [
        'Led development of multiple full-stack applications using MERN stack',
        'Architected and implemented RESTful APIs serving 100K+ daily requests',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: [
        'Developed and maintained web applications using React.js and Node.js',
        'Integrated third-party APIs and payment gateways',
        'Collaborated with cross-functional teams in agile environment',
        'Implemented automated testing reducing bugs by 30%',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: [
        'Built responsive web interfaces using React.js and modern CSS',
        'Worked on backend development with Express.js and MongoDB',
        'Participated in daily standups and sprint planning sessions',
        'Learned and applied best practices in software development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-xl hover-lift relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Briefcase size={20} />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                  <Calendar size={16} />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-6">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
