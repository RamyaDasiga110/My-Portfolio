
import { Database, Code, Server, Terminal, Layers, Rocket, Globe, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon,
  delay = '0.2s',
  gradientFrom = "from-portfolioBlue",
  gradientTo = "to-purple-500"
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ElementType;
  delay?: string;
  gradientFrom?: string;
  gradientTo?: string;
}) => (
  <Card className="animate-fade-in opacity-0 hover:shadow-lg transition-all duration-300 border border-gray-100 group" style={{ animationDelay: delay }}>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={skill} 
            className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-10 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:text-white hover:shadow-md transition-all duration-300 transform hover:scale-105`} 
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const programmingSkills = [
    "C#", "ASP.NET (Entity Framework, MVC)", "JavaScript/JQuery", 
    "NodeJS", "ReactJS", "MongoDB", "SQL"
  ];
  
  const toolsSkills = [
    "Microsoft Visual Studio", "Git", "GitHub", 
    "AWS Developer Tools", "SQL Server Management Studio", "WordPress"
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 relative">
          Technical Skills
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <SkillCategory 
            title="Programming Languages & Frameworks" 
            skills={programmingSkills} 
            icon={Code} 
            delay="0.2s"
            gradientFrom="from-portfolioBlue"
            gradientTo="to-purple-500"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            icon={Terminal} 
            delay="0.4s"
            gradientFrom="from-purple-500"
            gradientTo="to-portfolioBlue-light"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
