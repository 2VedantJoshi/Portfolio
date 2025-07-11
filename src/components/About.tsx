
import { Code, Palette, Rocket, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "from-accent to-secondary" },
    { name: "Backend Development", level: 88, color: "from-secondary to-accent" },
    { name: "UI/UX Design", level: 82, color: "from-accent to-primary" },
    { name: "Mobile Development", level: 75, color: "from-secondary to-primary" },
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects on time and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="text-accent mr-2 animate-pulse" size={20} />
            <h2 className="text-4xl font-bold text-foreground animate-fade-in">About Me</h2>
            <Zap className="text-accent ml-2 animate-pulse animation-delay-500" size={20} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 animate-scale-x"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Heart className="text-accent mr-3 animate-pulse" size={24} />
              <h3 className="text-2xl font-semibold text-foreground">Passionate About Creating Digital Excellence</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in animation-delay-500">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey began with a 
              curiosity for how things work on the web, and it has evolved into a passion 
              for crafting exceptional digital experiences.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in animation-delay-1000">
              I believe in the power of clean code, intuitive design, and continuous learning. 
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                    <span className="text-muted-foreground group-hover:text-secondary transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-scale-x relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group bg-card p-6 rounded-lg border border-border hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-1 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-accent group-hover:text-secondary transition-colors duration-300" size={24} />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm group-hover:text-card-foreground transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
