import { useState, useEffect } from "react";
import { ChevronDown, Download, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Developer","Full-Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"];
  
  useEffect(() => {
    let i = 0;
    const currentText = roles[currentRole];
    const timer = setInterval(() => {
      if (i < currentText.length) {
        setDisplayText(currentText.slice(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2000);
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [currentRole]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a dummy CV download - in real app, you'd have an actual CV file
    const link = document.createElement('a');
    link.href = '/Vedant_Joshi_Resume.pdf'; // Replace with actual CV URL
    link.download = 'Vedant_Joshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-purple rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-neon-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-neon-purple rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-neon-green/10 to-neon-blue/10 rounded-full blur-2xl animate-rotate-slow"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-5xl mx-auto ">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-left ">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-foreground ">Vedant Joshi</span>
          </h1>
          
          {/* Animated Role */}
          <div className="text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 h-16 flex items-center justify-center animate-slide-in-right">
            <span className="neon-text-blue font-semibold">
              {displayText}
              <span className="animate-ping">|</span>
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            I craft exceptional digital experiences through innovative web development, 
            combining cutting-edge technology with creative problem-solving to bring ideas to life.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={downloadCV}
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green transition-all duration-300 neon-glow-blue text-lg px-8 py-4 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
          
          <Button
            onClick={() => scrollToSection('projects')}
            variant="outline"
            size="lg"
            className="border-neon-green text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 text-lg px-8 py-4 transform hover:scale-105 neon-glow-green"
          >
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          {[
            { icon: Github, href: 'https://github.com/2VedantJoshi', color: 'neon-blue' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/22vedant-joshi/', color: 'neon-purple' },
            { icon: Mail, href: 'https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=CllgCJfrswBJzlsvjzbjwchDKxWwSJJNkxtHXvQdFmvLLpJzPqNcwKFnNqwWjzXFwCxJfmcZLbB', color: 'neon-green' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`group relative p-4 rounded-full border border-${social.color}/30 bg-card/20 backdrop-blur-sm hover:bg-${social.color}/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}/10 to-${social.color}/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <social.icon className={`w-6 h-6 text-${social.color} relative z-10 group-hover:animate-pulse`} />
            </a>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-neon-blue transition-colors duration-300 group opacity-0 animate-fade-in" 
          style={{ animationDelay: '1.2s' }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 group-hover:text-neon-blue transition-colors duration-300">Scroll Down</span>
            <ChevronDown size={24} className="group-hover:animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
