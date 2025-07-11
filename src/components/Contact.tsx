
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "john.doe@example.com",
      href: "mailto:john.doe@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-full animate-pulse animation-delay-3000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-accent/30 rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-ping animation-delay-1500"></div>
        <div className="absolute top-2/3 right-20 w-3 h-3 bg-accent/25 rounded-full animate-pulse animation-delay-2500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="text-accent mr-2 animate-pulse" size={20} />
            <h2 className="text-4xl font-bold text-primary-foreground animate-fade-in">Get In Touch</h2>
            <MessageCircle className="text-accent ml-2 animate-pulse animation-delay-500" size={20} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 animate-scale-x"></div>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="flex items-center mb-8">
              <Sparkles className="text-accent mr-3 animate-pulse" size={24} />
              <h3 className="text-2xl font-semibold text-primary-foreground">Let's start a conversation</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent focus:ring-accent/20 transition-all duration-300 group-hover:bg-primary-foreground/15"
                  required
                />
              </div>
              
              <div className="group">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent focus:ring-accent/20 transition-all duration-300 group-hover:bg-primary-foreground/15"
                  required
                />
              </div>
              
              <div className="group">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent focus:ring-accent/20 resize-none transition-all duration-300 group-hover:bg-primary-foreground/15"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-accent-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Send size={18} className="mr-2 group-hover:animate-pulse" />
                  Send Message
                </div>
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in animation-delay-500">
            <div className="flex items-center mb-8">
              <Mail className="text-accent mr-3 animate-pulse" size={24} />
              <h3 className="text-2xl font-semibold text-primary-foreground">Contact Information</h3>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group flex items-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-gradient-to-r from-accent/20 to-secondary/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 border border-accent/30">
                    <info.icon className="text-accent group-hover:text-secondary transition-colors duration-300" size={20} />
                  </div>
                  
                  <div className="relative">
                    <h4 className="text-primary-foreground font-semibold group-hover:text-accent transition-colors duration-300">{info.title}</h4>
                    <p className="text-primary-foreground/80 group-hover:text-secondary transition-colors duration-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 relative overflow-hidden group hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-3">
                  <Sparkles className="text-accent mr-2 animate-pulse" size={20} />
                  <h4 className="text-primary-foreground font-semibold">Let's connect!</h4>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
