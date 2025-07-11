
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-purple-500" },
    { name: "Backend Development", level: 88, color: "from-green-500 to-teal-500" },
    { name: "UI/UX Design", level: 82, color: "from-pink-500 to-rose-500" },
    { name: "Mobile Development", level: 75, color: "from-orange-500 to-yellow-500" },
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 animate-scale-in"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Passionate About Creating Digital Excellence</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey began with a 
              curiosity for how things work on the web, and it has evolved into a passion 
              for crafting exceptional digital experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in the power of clean code, intuitive design, and continuous learning. 
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-scale-x`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="text-purple-500 mb-4" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
