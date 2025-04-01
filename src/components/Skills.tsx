
import { Database, Code, Server, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ElementType;
}) => (
  <Card className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-portfolioBlue bg-opacity-10">
          <Icon size={20} className="text-portfolioBlue" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
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
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <SkillCategory 
            title="Programming Languages & Frameworks" 
            skills={programmingSkills} 
            icon={Code} 
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            icon={Terminal} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
