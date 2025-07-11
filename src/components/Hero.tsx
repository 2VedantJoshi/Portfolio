
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creative Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-muted/20 to-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-muted rounded-full animate-pulse animation-delay-1500"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-2000"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6 animate-scale-in animation-delay-500">
            <Sparkles className="text-accent mr-2 animate-pulse" size={24} />
            <span className="text-primary-foreground/80 font-medium">Welcome to my portfolio</span>
            <Sparkles className="text-accent ml-2 animate-pulse animation-delay-1000" size={24} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-scale-in">
            John <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary animate-pulse">Doe</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-accent pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            I craft beautiful digital experiences through innovative web development, 
            combining creativity with cutting-edge technology to bring ideas to life.
          </p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-16 animate-fade-in animation-delay-1500">
          <a href="#" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-full border border-primary-foreground/20 group-hover:border-accent/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
              <Github className="text-primary-foreground group-hover:text-accent transition-colors duration-300" size={24} />
            </div>
          </a>
          
          <a href="#" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse animation-delay-500"></div>
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-full border border-primary-foreground/20 group-hover:border-secondary/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
              <Linkedin className="text-primary-foreground group-hover:text-secondary transition-colors duration-300" size={24} />
            </div>
          </a>
          
          <a href="#" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse animation-delay-1000"></div>
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-full border border-primary-foreground/20 group-hover:border-accent/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
              <Mail className="text-primary-foreground group-hover:text-accent transition-colors duration-300" size={24} />
            </div>
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="group animate-bounce cursor-pointer text-primary-foreground hover:text-accent transition-all duration-300 transform hover:scale-110"
        >
          <ChevronDown size={32} className="group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
