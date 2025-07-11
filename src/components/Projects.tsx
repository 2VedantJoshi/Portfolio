
import { useState } from "react";
import { ExternalLink, Github, Star, Eye, Code, Palette, Server, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, real-time inventory, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "#",
      live: "#",
      featured: true,
      category: "Full-Stack",
      icon: Server,
      color: "neon-blue"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false,
      category: "Frontend",
      icon: Code,
      color: "neon-purple"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with detailed forecasts, interactive maps, location-based alerts, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["Vue.js", "API Integration", "Chart.js", "PWA"],
      github: "#",
      live: "#",
      featured: true,
      category: "Frontend",
      icon: Palette,
      color: "neon-green"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, budget tracking, and investment portfolio management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
      featured: true,
      category: "Mobile",
      icon: Smartphone,
      color: "neon-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-neon-purple uppercase tracking-wider">My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="neon-text-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in creating innovative digital solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-${project.color}/50 transition-all duration-500 transform hover:-translate-y-4 card-3d`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transform: hoveredProject === index 
                  ? 'perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(-16px)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className={`absolute top-4 left-4 z-20 bg-gradient-to-r from-${project.color} to-${project.color}/80 text-background px-3 py-1 rounded-full text-xs font-semibold animate-pulse flex items-center`}>
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground border border-border flex items-center">
                <project.icon className="w-3 h-3 mr-1" />
                {project.category}
              </div>
              
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${project.color}/80 via-${project.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Action Buttons Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    className={`bg-${project.color}/90 hover:bg-${project.color} text-background backdrop-blur-sm neon-glow-${project.color.split('-')[1]} transform hover:scale-110 transition-all duration-300`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-background backdrop-blur-sm transform hover:scale-110 transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 relative">
                {/* Gradient Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${project.color} to-${project.color}/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold text-foreground group-hover:text-${project.color} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <Eye className={`text-muted-foreground group-hover:text-${project.color} transition-colors duration-300 animate-pulse opacity-0 group-hover:opacity-100`} size={16} />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 bg-gradient-to-r from-${project.color}/10 to-${project.color}/5 text-${project.color} border border-${project.color}/20 text-sm rounded-full hover:from-${project.color}/20 hover:to-${project.color}/10 hover:border-${project.color}/40 transition-all duration-300 transform hover:scale-105`}
                      style={{ animationDelay: `${tagIndex * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-${project.color}/10 -z-10`}></div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 transform hover:scale-105 neon-glow-blue px-8 py-4"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
