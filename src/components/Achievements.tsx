import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AchievementProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
  link?: string;
  delay: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const Achievement = ({ 
  title, 
  organization, 
  year, 
  description, 
  link, 
  delay,
  gradientFrom = "from-portfolioBlue",
  gradientTo = "to-purple-500"
}: AchievementProps) => (
  <Card className="animate-fade-in opacity-0 hover:shadow-lg transition-all duration-300 group" style={{ animationDelay: delay }}>
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <CardTitle className={`text-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>{title}</CardTitle>
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
          className={`text-sm flex items-center gap-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent hover:underline group`}
        >
          <ExternalLink size={14} className="text-gray-400 group-hover:rotate-12 transition-transform" /> View Certificate
        </a>
      </CardFooter>
    )}
  </Card>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Achievements & Certifications
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Achievement 
            title="AI for Small Businesses"
            organization="Founderz Business School & Microsoft"
            year="2025"
            description="Completed AI business transformation training and pitched an innovative AI Learning Assistant concept, leveraging Prompt Engineering and AI capabilities for personalized education."
            link="https://learn.founderz.com/certificado/ai-for-small-businesses/87f4a4cd-f9cb-4b0b-bfac-5432be01b9b7"
            delay="0.1s"
            gradientFrom="from-violet-600"
            gradientTo="to-indigo-600"
          />

          <Achievement 
            title="Mastering MERN Stack"
            organization="Udemy"
            year="2025"
            description="Gained hands-on expertise in building full-stack applications using MongoDB, ExpressJS, ReactJS, and NodeJS"
            link="https://www.udemy.com/certificate/UC-a92af406-78c2-4fa7-b013-b22f6e853c91/"
            delay="0.2s"
            gradientFrom="from-purple-500"
            gradientTo="to-pink-500"
          />
          
          <Achievement 
            title="Code Vipassana Season 9"
            organization="Google Developers Group"
            year="2025"
            description="Exceptional Performance award - Agentic Apps with Cloud Databases, Serverless and Open Source Integrations"
            delay="0.3s"
            gradientFrom="from-blue-500"
            gradientTo="to-indigo-500"
          />

          <Achievement 
            title="Introduction to Artificial Intelligence"
            organization="Founderz Business School & Microsoft"
            year="2024"
            description="Completed comprehensive training in AI fundamentals, exploring core concepts and practical applications of artificial intelligence."
            link="https://learn.founderz.com/certificado/ai-skills-4-all-en/87f4a4cd-f9cb-4b0b-bfac-5432be01b9b7"
            delay="0.4s"
            gradientFrom="from-violet-500"
            gradientTo="to-purple-600"
          />
          
          <Achievement 
            title="Code Vipassana Season 6"
            organization="Google Developers Group"
            year="2024"
            description="Exceptional Performance award - Data to AI with Gemini and Gemma"
            delay="0.4s"
            gradientFrom="from-green-500"
            gradientTo="to-emerald-500"
          />
          
          <Achievement 
            title="Code Vipassana Season 5"
            organization="Google Developers Group, Cloud Kochi"
            year="2024"
            description="Exceptional Performance award - Duet AI Challenge"
            delay="0.5s"
            gradientFrom="from-amber-500"
            gradientTo="to-yellow-500"
          />
          
          <Achievement 
            title="Google Cloud Platform Fundamentals"
            organization="Google"
            year="2019"
            description="Core Infrastructure certification"
            delay="0.6s"
            gradientFrom="from-red-500"
            gradientTo="to-orange-500"
          />
          
          <Achievement 
            title="Learn with Google AI"
            organization="Google"
            year="2018"
            description="Explore ML Beginner certification"
            delay="0.7s"
            gradientFrom="from-teal-500"
            gradientTo="to-cyan-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
