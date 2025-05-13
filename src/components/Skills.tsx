
import { Code, Terminal, Database, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingShapes } from "./DecorativeElements";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillCategoryProps { 
  title: string; 
  skills: string[]; 
  icon: React.ElementType;
  delay?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon,
  delay = '0.2s',
  gradientFrom = "from-portfolioBlue",
  gradientTo = "to-purple-500"
}: SkillCategoryProps) => (
  <Card className="animate-fade-in opacity-0 bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 relative" style={{ animationDelay: delay }}>
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-portfolioBlue/10 to-purple-400/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
    
    <CardHeader className="relative z-10">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
          <Icon size={20} className="text-white" />
        </div>
        <CardTitle className="text-xl bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transform transition-transform origin-left">{title}</CardTitle>
      </div>
    </CardHeader>
    
    <CardContent className="relative z-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <TooltipProvider key={skill}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span 
                  className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-10 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:text-white hover:shadow-md transition-all duration-300 hover:bg-portfolioBlue`}
                  style={{ transitionDelay: `${Math.random() * 0.5}s` }}
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
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <FloatingShapes />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title mb-8 relative">
          Technical Skills
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
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
