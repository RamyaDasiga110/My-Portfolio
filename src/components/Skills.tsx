
import { Database, Code, Server, Terminal, Layers, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon,
  delay = '0.2s'
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ElementType;
  delay?: string;
}) => (
  <Card className="animate-fade-in opacity-0 hover:shadow-lg transition-all duration-300 border border-gray-100 group" style={{ animationDelay: delay }}>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-md bg-portfolioBlue bg-opacity-10 group-hover:bg-portfolioBlue group-hover:text-white transition-colors duration-300">
          <Icon size={24} className="text-portfolioBlue group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={skill} 
            className="skill-tag" 
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
    "NodeJS", "ReactJS", "ExpressJS", "MongoDB", "SQL"
  ];
  
  const toolsSkills = [
    "Microsoft Visual Studio", "Git", "GitHub", 
    "AWS Developer Tools", "SQL Server Management Studio"
  ];
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 relative">
          Technical Skills
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-portfolioBlue-light rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <SkillCategory 
            title="Programming Languages & Frameworks" 
            skills={programmingSkills} 
            icon={Code} 
            delay="0.2s"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            icon={Terminal} 
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
