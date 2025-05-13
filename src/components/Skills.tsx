
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
  delay = "0.2s",
  gradientFrom = "from-portfolioBlue",
  gradientTo = "to-purple-500",
}: {
  title: string;
  skills: string[];
  icon: React.ElementType;
  delay?: string;
  gradientFrom?: string;
  gradientTo?: string;
}) => (
  <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80 z-0"></div>
    <DiagonalLines className="opacity-5 z-0" />
    <CardContent className="relative z-10 p-6">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`p-3 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-portfolioBlue">
          {title}
        </h3>
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
  // ... same skill arrays as before

  return (
    <section id="skills" className="w-full py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full z-0">
        {/* SVGs */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
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
