
import { ExternalLink, Github, Rocket, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  delay: string;
  icon: React.ReactNode;
}

const Project = ({ title, description, link, github, technologies, delay, icon }: ProjectProps) => (
  <Card className="animate-fade-in opacity-0 bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100" style={{ animationDelay: delay }}>
    <div className="absolute -right-10 -top-10 w-20 h-20 bg-portfolioBlue bg-opacity-10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
    
    <CardHeader className="relative">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-portfolioBlue bg-opacity-10 text-portfolioBlue">
          {icon}
        </div>
        <CardTitle className="text-xl gradient-text">{title}</CardTitle>
      </div>
    </CardHeader>
    
    <CardContent className="relative z-10">
      <CardDescription className="text-gray-700 mb-4 text-sm">{description}</CardDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="skill-tag text-xs">{tech}</span>
        ))}
      </div>
    </CardContent>
    
    <CardFooter className="flex gap-3 relative z-10">
      {link && (
        <Button 
          variant="outline" 
          size="sm" 
          className="border-portfolioBlue text-portfolioBlue hover:bg-portfolioBlue hover:text-white group"
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-portfolioGray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 relative">
          Projects
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-portfolioBlue-light rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Project 
            title="Real-time Weather Application" 
            description="A responsive web application that provides real-time weather updates with clean user interface and performance optimizations."
            link="https://realtime-weatherapp-nextjs-git-master-ramyadasigas-projects.vercel.app/"
            technologies={["NextJS", "TypeScript", "Weather API", "Responsive Design"]}
            delay="0.2s"
            icon={<Rocket size={20} />}
          />
          
          <Project 
            title="Data Security Tool" 
            description="An Encryption/Decryption Tool that implements the SALT algorithm for securely encrypting and decrypting original passwords in connection strings."
            technologies={["C#", "Cryptography", "SALT Algorithm", "Security"]}
            delay="0.3s"
            icon={<Star size={20} />}
          />
          
          <Project 
            title="Database Audit Tool" 
            description="Tool to track creation and modification dates of database tables, stored procedures, and functions across all environments, supporting compliance and oversight."
            technologies={["SQL", "Database Management", "Audit", "Compliance"]}
            delay="0.4s"
            icon={<Code size={20} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
