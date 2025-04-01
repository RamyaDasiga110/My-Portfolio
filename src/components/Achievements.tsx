
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AchievementProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
  link?: string;
  delay: string;
}

const Achievement = ({ title, organization, year, description, link, delay }: AchievementProps) => (
  <Card className="animate-fade-in opacity-0" style={{ animationDelay: delay }}>
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg text-portfolioBlue">{title}</CardTitle>
        <span className="text-sm font-medium text-gray-500">{year}</span>
      </div>
      <CardDescription className="text-gray-700">{organization}</CardDescription>
    </CardHeader>
    {description && (
      <CardContent className="pt-2 pb-2">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    )}
    {link && (
      <CardFooter className="pt-2">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm flex items-center gap-1 text-portfolioBlue hover:underline"
        >
          <ExternalLink size={14} /> View Certificate
        </a>
      </CardFooter>
    )}
  </Card>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Achievement 
            title="Mastering MERN Stack"
            organization="Udemy"
            year="2025"
            description="Gained hands-on expertise in building full-stack applications using MongoDB, ExpressJS, ReactJS, and NodeJS"
            link="https://www.udemy.com/certificate/UC-a92af406-78c2-4fa7-b013-b22f6e853c91/"
            delay="0.2s"
          />
          
          <Achievement 
            title="Exceptional Performance award in Code Vipassana Season 5"
            organization="Google Developers Group, Cloud Kochi"
            year="2024"
            description="Duet AI Challenge"
            delay="0.3s"
          />
          
          <Achievement 
            title="Exceptional Performance award in Code Vipassana Season 6"
            organization="Google Developers Group"
            year="2024"
            description="Data to AI with Gemini and Gemma"
            delay="0.4s"
          />
          
          <Achievement 
            title="Google Cloud Platform Fundamentals"
            organization="Google"
            year="2019"
            description="Core Infrastructure certification"
            delay="0.5s"
          />
          
          <Achievement 
            title="Learn with Google AI"
            organization="Google"
            year="2018"
            description="Explore ML Beginner certification"
            delay="0.6s"
          />
          
          <Achievement 
            title="Event Coordination"
            organization="Various"
            year="2016-2020"
            description="Successfully coordinated five technical events with 500+ participants"
            delay="0.7s"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
