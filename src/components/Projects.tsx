
import { ExternalLink, Github, Rocket, Star, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingShapes } from "./DecorativeElements";
import { useResponsive } from "@/hooks/use-responsive";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  delay: string;
  icon: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

const Project = ({ title, description, link, github, technologies, delay, icon, gradientFrom = "from-portfolioBlue", gradientTo = "to-purple-500" }: ProjectProps) => {
  const { isTablet } = useResponsive();
  
  return (
    <Card className={`animate-fade-in opacity-0 bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 relative ${isTablet ? 'h-full' : ''}`} style={{ animationDelay: delay }}>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-portfolioBlue/10 to-purple-400/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-md bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
            {icon}
          </div>
          <CardTitle className={`${isTablet ? 'text-lg' : 'text-xl'} bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transform transition-transform origin-left`}>{title}</CardTitle>
        </div>
      </CardHeader>
    
    <CardContent className={`relative z-10 ${isTablet ? 'p-4' : ''}`}>
      <CardDescription className={`text-gray-700 mb-4 ${isTablet ? 'text-xs' : 'text-sm'}`}>{description}</CardDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-10 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:text-white hover:shadow-md transition-all duration-300 group-hover:translate-y-0 translate-y-0 hover:bg-portfolioBlue ${isTablet ? 'text-[10px] px-2' : ''}`}
            style={{ transitionDelay: `${Math.random() * 0.5}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
    
    <CardFooter className={`flex gap-3 relative z-10 ${isTablet ? 'p-4 pt-0' : ''}`}>
      {link && (
        <Button 
          variant="outline" 
          size="sm" 
          className={`border-portfolioBlue text-portfolioBlue hover:bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:text-white group`}
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1"
          >
            <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" /> View Project
          </a>
        </Button>
      )}
      
      {github && (
        <Button variant="outline" size="sm" className="group">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1"
          >
            <Github size={14} className="group-hover:rotate-12 transition-transform" /> GitHub
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
  );
};

const Projects = () => {
  const { isTablet } = useResponsive();
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <FloatingShapes />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title mb-8 relative">
          Projects
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className={`grid grid-cols-1 ${isTablet ? 'grid-cols-2 gap-4' : 'md:grid-cols-2 lg:grid-cols-3 gap-6'} mt-12`}>
          <Project 
            title="Real-time Weather Application" 
            description="A responsive web application that provides real-time weather updates with clean user interface and performance optimizations."
            link="https://realtime-weatherapp-nextjs-git-master-ramyadasigas-projects.vercel.app/"
            technologies={["NextJS", "TypeScript", "Weather API", "Responsive Design"]}
            delay="0.2s"
            icon={<Rocket size={20} />}
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-400"
          />
          
          <Project 
            title="Data Security Tool" 
            description="An Encryption/Decryption Tool that implements the SALT algorithm for securely encrypting and decrypting original passwords in connection strings."
            technologies={["C#", "Cryptography", "SALT Algorithm", "Security"]}
            delay="0.3s"
            icon={<Star size={20} />}
            gradientFrom="from-purple-500"
            gradientTo="to-pink-400"
          />
          
          <Project 
            title="Database Audit Tool" 
            description="Tool to track creation and modification dates of database tables, stored procedures, and functions across all environments, supporting compliance and oversight."
            technologies={["SQL", "Database Management", "Audit", "Compliance"]}
            delay="0.4s"
            icon={<Code size={20} />}
            gradientFrom="from-portfolioBlue"
            gradientTo="to-blue-400"
          />
          
          <Project 
            title="Mapecontrol Website" 
            description="Redesigned and updated company website with modern layout, responsive design, and performance optimization."
            link="https://www.mapecontrol.it"
            technologies={["WordPress", "Web Design", "Responsive UI", "SEO"]}
            delay="0.5s"
            icon={<Globe size={20} />}
            gradientFrom="from-green-500"
            gradientTo="to-teal-400"
          />
          
          <Project 
            title="Esploriamoitalia Website" 
            description="Improved user experience through a modern layout, responsive design, and performance optimization for a travel company."
            link="https://www.esploriamoitalia.com"
            technologies={["WordPress", "Web Design", "Responsive UI", "SEO"]}
            delay="0.6s"
            icon={<Globe size={20} />}
            gradientFrom="from-amber-500"
            gradientTo="to-orange-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
