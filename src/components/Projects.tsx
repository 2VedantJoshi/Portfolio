
import { ExternalLink, Github, Star, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["Vue.js", "API Integration", "Charts.js"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, modern design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-accent mr-2 animate-pulse" size={20} />
            <h2 className="text-4xl font-bold text-foreground animate-fade-in">Featured Projects</h2>
            <Star className="text-accent ml-2 animate-pulse animation-delay-500" size={20} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 animate-scale-x"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in relative ${project.featured ? 'ring-2 ring-accent/20' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent to-secondary text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a href={project.github} className="group/btn relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-card/90 backdrop-blur-sm p-2 rounded-full border border-border group-hover/btn:border-accent/50 transition-all duration-300 transform group-hover/btn:scale-110">
                      <Github size={16} className="text-foreground group-hover/btn:text-accent transition-colors duration-300" />
                    </div>
                  </a>
                  
                  <a href={project.live} className="group/btn relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-card/90 backdrop-blur-sm p-2 rounded-full border border-border group-hover/btn:border-secondary/50 transition-all duration-300 transform group-hover/btn:scale-110">
                      <ExternalLink size={16} className="text-foreground group-hover/btn:text-secondary transition-colors duration-300" />
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <Eye className="text-muted-foreground group-hover:text-secondary transition-colors duration-300 animate-pulse" size={16} />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-card-foreground transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-accent/10 to-secondary/10 text-accent border border-accent/20 text-sm rounded-full hover:from-accent/20 hover:to-secondary/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (tagIndex * 100)}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
