import { Code, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DiagonalLines } from "./DecorativeElements";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 group overflow-hidden" style={{ animationDelay: delay }}>
    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
    <DiagonalLines className="opacity-5" />
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-portfolioBlue transition-colors">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <TooltipProvider key={skill}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span 
                  className="bg-white text-gray-800 border-2 border-portfolioBlue px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:text-white hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-portfolioBlue"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const programmingSkills = [
    "C#", "ASP.NET (Entity Framework, MVC)", "JavaScript/JQuery", 
    "NodeJS", "ReactJS", "MongoDB", "SQL", "WordPress"
  ];
  
  const toolsSkills = [
    "Microsoft Visual Studio", "Git", "GitHub", 
    "AWS Developer Tools", "SQL Server Management Studio", "WordPress",
    "Adobe Premiere Pro", "Canva"
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <FloatingShapes />
      
      <div className="container mx-auto px-4 relative z-10">
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
            gradientTo="to-portfolioBlue-light"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            icon={Terminal} 
            delay="0.4s"
            gradientFrom="from-portfolioBlue-dark"
            gradientTo="to-portfolioBlue"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
