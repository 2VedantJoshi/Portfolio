
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

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
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-scale-in">
            John <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Doe</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            I craft beautiful digital experiences through innovative web development, 
            combining creativity with cutting-edge technology to bring ideas to life.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in animation-delay-1500">
          <a href="#" className="text-white hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
            <Github size={28} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
            <Mail size={28} />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce cursor-pointer text-white hover:text-purple-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
