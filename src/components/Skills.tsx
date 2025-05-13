
import { Code, Terminal, Database, Cpu } from "lucide-react";
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
  <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80"></div>
    <DiagonalLines className="opacity-5" />
    <CardContent className="relative z-10 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className={`p-3 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-portfolioBlue">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <TooltipProvider key={skill}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span 
                  className="border-2 border-portfolioBlue bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-portfolioBlue hover:text-white hover:shadow-md transform rounded-md"
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

  const databaseSkills = [
    "SQL Server", "MongoDB", "MySQL", "Database Design",
    "Query Optimization", "Data Modeling"
  ];

  const devOpsSkills = [
    "CI/CD", "AWS", "Version Control", "Docker",
    "Deployment Automation", "Testing"
  ];
  
  return (
    <section id="skills" className="w-full relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full">
        <svg className="absolute top-10 right-10 h-64 w-64 text-portfolioBlue opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45,-65.1C59.1,-56.3,72,-43.5,77.8,-27.9C83.7,-12.2,82.6,6.4,77.4,23.5C72.2,40.5,63.1,56.2,49.3,65.2C35.5,74.3,17.8,76.7,0.2,76.5C-17.3,76.2,-34.5,73.2,-46.7,63.4C-58.9,53.7,-66.1,37,-69.7,20.7C-73.3,4.4,-73.2,-11.4,-67.5,-24.5C-61.8,-37.6,-50.6,-48,-38,-57.4C-25.4,-66.7,-12.7,-74.9,1.9,-77.7C16.6,-80.5,33.1,-77.8,45,-65.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-10 left-10 h-48 w-48 text-portfolioBlue opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M31.5,-37.4C44.4,-29.5,60.8,-23.4,67.9,-11.3C75,0.8,72.9,19,64.6,31.8C56.4,44.7,42,52.3,27.7,56.7C13.4,61.2,-0.9,62.6,-16.4,60.1C-31.9,57.6,-48.6,51.2,-59.6,39C-70.6,26.7,-76,8.5,-73,-8.1C-69.9,-24.8,-58.5,-40.1,-44.3,-48.1C-30.1,-56,-15.1,-56.8,-2.1,-54C10.8,-51.3,21.7,-45.3,31.5,-37.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Technical Skills
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-portfolioBlue to-portfolioBlue-light"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Expertise in modern web technologies and development tools
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
          <SkillCategory 
            title="Database Systems" 
            skills={databaseSkills} 
            icon={Database} 
            delay="0.6s"
            gradientFrom="from-blue-500"
            gradientTo="to-purple-500"
          />
          <SkillCategory 
            title="DevOps & Deployment" 
            skills={devOpsSkills} 
            icon={Cpu} 
            delay="0.8s"
            gradientFrom="from-purple-500"
            gradientTo="to-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
