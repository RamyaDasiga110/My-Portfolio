
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  delay: string;
}

const Project = ({ title, description, link, github, technologies, delay }: ProjectProps) => (
  <Card className="animate-fade-in opacity-0" style={{ animationDelay: delay }}>
    <CardHeader>
      <CardTitle className="text-xl text-portfolioBlue">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700 mb-4">{description}</CardDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="skill-tag text-xs">{tech}</span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex gap-3">
      {link && (
        <Button 
          variant="outline" 
          size="sm" 
          className="border-portfolioBlue text-portfolioBlue hover:bg-portfolioBlue hover:text-white"
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1"
          >
            <ExternalLink size={14} /> View Project
          </a>
        </Button>
      )}
      {github && (
        <Button variant="outline" size="sm">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1"
          >
            <Github size={14} /> GitHub
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-portfolioGray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Project 
            title="Real-time Weather Application" 
            description="A responsive web application that provides real-time weather updates with clean user interface and performance optimizations."
            link="https://realtime-weatherapp-nextjs-git-master-ramyadasigas-projects.vercel.app/"
            technologies={["NextJS", "TypeScript", "Weather API", "Responsive Design"]}
            delay="0.2s"
          />
          
          <Project 
            title="Data Security Tool" 
            description="An Encryption/Decryption Tool that implements the SALT algorithm for securely encrypting and decrypting original passwords in connection strings."
            technologies={["C#", "Cryptography", "SALT Algorithm", "Security"]}
            delay="0.3s"
          />
          
          <Project 
            title="Database Audit Tool" 
            description="Tool to track creation and modification dates of database tables, stored procedures, and functions across all environments, supporting compliance and oversight."
            technologies={["SQL", "Database Management", "Audit", "Compliance"]}
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
