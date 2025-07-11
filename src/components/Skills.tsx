
import { useState } from "react";
import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  GitBranch,
  Server,
  Globe,
  Cpu,
  Shield
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "neon-blue",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Framer Motion", level: 85, icon: "🎭" },
        { name: "Redux Toolkit", level: 87, icon: "🔄" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "neon-purple",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "GraphQL", level: 80, icon: "🔗" },
        { name: "REST APIs", level: 93, icon: "🌐" },
        { name: "Socket.io", level: 85, icon: "⚡" }
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: Database,
      color: "neon-green",
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 83, icon: "🐳" },
        { name: "Redis", level: 78, icon: "🔴" },
        { name: "Firebase", level: 87, icon: "🔥" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: GitBranch,
      color: "neon-blue",
      skills: [
        { name: "Git & GitHub", level: 95, icon: "🐙" },
        { name: "VS Code", level: 98, icon: "💙" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Jest", level: 85, icon: "🃏" },
        { name: "CI/CD", level: 82, icon: "🔄" },
        { name: "Figma", level: 75, icon: "🎨" }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-neon-green/5 to-neon-purple/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-neon-green uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            My <span className="neon-text-green">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple mx-auto mb-8"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? `bg-${category.color}/20 border-${category.color} text-${category.color} neon-glow-${category.color.split('-')[1]}`
                  : 'bg-card/50 border-border text-muted-foreground hover:border-neon-blue/50 hover:text-foreground'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-neon-blue/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 card-3d animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className={`text-${skillCategories[activeCategory as keyof typeof skillCategories].color} font-bold text-lg`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-2">
                <div 
                  className={`h-full bg-gradient-to-r from-${skillCategories[activeCategory as keyof typeof skillCategories].color} to-${skillCategories[activeCategory as keyof typeof skillCategories].color}/70 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always <span className="neon-text-purple">Learning</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the forefront of innovation. 
              I regularly explore new frameworks, tools, and methodologies to ensure I can deliver 
              cutting-edge solutions that meet modern development standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
