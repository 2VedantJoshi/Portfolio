
import { useState } from "react";
import { Code2, Palette, Rocket, Users, Coffee, Brain } from "lucide-react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skills = [
    { name: "Frontend Development", color: "neon-blue" },
    { name: "Backend Development", color: "neon-purple" },
    { name: "UI/UX Design", color: "neon-green" },
    { name: "Database Management", color: "neon-blue" },
  ];

  const features = [
    {
      icon: Code2,
      title: "Critical Thinking",
      description: "Writing maintainable, scalable code following industry best practices and modern standards.",
      color: "neon-blue"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, responsive interfaces with attention to user experience and accessibility.",
      color: "neon-purple"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, SEO, and seamless user interactions across all devices.",
      color: "neon-green"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in agile teams to deliver high-quality projects on time and within scope.",
      color: "neon-blue"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions and analytical thinking.",
      color: "neon-purple"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and industry trends to deliver cutting-edge solutions.",
      color: "neon-green"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-neon-blue uppercase tracking-wider">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="neon-text-purple">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Skills */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mr-3"></span>
                My Journey
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
As a passionate and driven Computer Engineering student from K.K. Wagh College, my journey in tech started with a deep curiosity for how software shapes the world around us. Over the years, I've transformed that curiosity into hands-on experience by building impactful projects like an AI-based Forest Fire Prediction System, a Zerodha-inspired trading platform, and a cricket tournament auction app — all of which reflect my drive to solve real-world problems using code.
                </p>
                <p>
I specialize in full-stack development with a focus on React, Node.js, Python, and cloud technologies. Whether it's crafting seamless user experiences or designing intelligent systems, I’m committed to writing clean, efficient code and continuously learning to stay ahead in the ever-evolving tech landscape.


                </p>
                <p>
Beyond coding, I enjoy participating in hackathons, exploring emerging technologies, and sharing knowledge with peers. My goal is to create solutions that are not just functional, but meaningful.


                </p>
              </div>
            </div>
            
            {/* Skills Progress Bars */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Expertise</h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium group-hover:text-neon-blue transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className={`text-${skill.color} font-bold`}></span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden group-hover:h-4 transition-all duration-300">
                    <div 
                      className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-${feature.color}/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 card-3d cursor-pointer`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index 
                    ? 'perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-8px)' 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                  transition: 'all 0.3s ease-out'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-${feature.color}/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300 border border-${feature.color}/20`}>
                    <feature.icon className={`text-${feature.color} group-hover:animate-pulse`} size={24} />
                  </div>
                  <h4 className={`font-semibold text-foreground mb-3 text-lg group-hover:text-${feature.color} transition-colors duration-300`}>
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-${feature.color}/20`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
