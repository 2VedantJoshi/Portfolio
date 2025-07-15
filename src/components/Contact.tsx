import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: Replace with your actual EmailJS service ID, template ID, and public key
      const serviceID = 'service_24n9dk6';
      const templateID = 'template_jfe1r1l';
      const publicKey = 'LgIItSCoTAZxehsJA';

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    }
    setIsSubmitting(false);
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
      content: "vedantjoshi220@gmail.com",
      href: "vedantjoshi220@gmail.com",
      color: "neon-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 75887 07109",
      href: "tel:+15551234567",
      color: "neon-purple"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nashik, Maharastra",
      href: "#",
      color: "neon-green"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/2VedantJoshi", color: "neon-blue", name: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/22vedant-joshi/", color: "neon-purple", name: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/VedantJoshi2004", color: "neon-green", name: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-neon-purple/5 to-neon-green/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-neon-blue uppercase tracking-wider">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get In <span className="neon-text-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-3 rounded-xl mr-4 border border-neon-blue/30">
                  <MessageCircle className="text-neon-blue animate-pulse" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Send me a message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 group-hover:border-neon-blue/50"
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
                      className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 group-hover:border-neon-blue/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 group-hover:border-neon-blue/50"
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
                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 resize-none transition-all duration-300 group-hover:border-neon-blue/50"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-background font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 neon-glow-blue relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <div className="bg-gradient-to-r from-neon-green/20 to-neon-blue/20 p-3 rounded-xl mr-4 border border-neon-green/30">
                  <Mail className="text-neon-green animate-pulse" size={24} />
                </div>
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`group flex items-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border hover:border-${info.color}/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 card-3d`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-gradient-to-r from-${info.color}/20 to-${info.color}/10 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 border border-${info.color}/30`}>
                    <info.icon className={`text-${info.color} group-hover:animate-pulse`} size={24} />
                  </div>
                  
                  <div>
                    <h4 className={`text-foreground font-semibold mb-1 group-hover:text-${info.color} transition-colors duration-300`}>
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            {/* Social Links */}
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                Let's Connect on Social Media
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative p-4 rounded-2xl border border-${social.color}/30 bg-card/20 hover:bg-${social.color}/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}/5 to-${social.color}/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <social.icon className={`w-6 h-6 text-${social.color} relative z-10 group-hover:animate-pulse`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5 rounded-2xl p-6 border border-neon-blue/20">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <span className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></span>
                Quick Response
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or connect with me on LinkedIn.
              </p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
