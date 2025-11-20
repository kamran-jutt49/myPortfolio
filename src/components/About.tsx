import myImage from '../../public/Assets/Generated Image November 19, 2025 - 10_33PM.png'

export const About = () => {

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
            <p className="text-lg  text-foreground leading-relaxed">
              My journey in web development has equipped me with a strong foundation in both
              frontend and backend technologies. I believe in writing clean, maintainable code and
              staying updated with the latest industry trends and best practices.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, learning new
              technologies, and sharing knowledge with the developer community.
            </p>
          </div>
          <div className='myImage'>
            <img src={myImage} className='w-auto' />
          </div>
        </div>
      </div>
    </section>
  );
};
