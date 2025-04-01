
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-portfolioGray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="experience-card animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Software Developer I</h3>
                <div className="flex items-center gap-1 text-gray-600">
                  <Briefcase size={16} />
                  <span>Autodesk</span>
                </div>
              </div>
              <div>
                <Badge className="bg-portfolioBlue text-white font-medium">May 2021 - Dec 2023</Badge>
                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <MapPin size={16} />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
            
            <ul className="mt-6 space-y-4 list-disc list-inside text-gray-700">
              <li>
                Worked on Autodesk's initiative to develop a new pricing tool solution aimed at replacing existing Price Management and Price Administration tools, focusing on flexibility, scalability, reduced dependency on back-office development, enhanced productivity, robust reporting capabilities, and historical data retention.
              </li>
              <li>
                Spearheaded development of Pricing Willow Application, reducing pricing operation time by 40% through implementation of automated workflows and efficient business model creation processes.
              </li>
              <li>
                Engineered and optimized SQL queries resulting in 30% faster data retrieval, handling over 1M+ records for critical pricing operations.
              </li>
              <li>
                Implemented automated deployment pipeline using AWS CodePipeline, reducing deployment time by 60% and achieving 96% deployment success rate.
              </li>
              <li>
                Developed responsive user interfaces using C# and ASP.NET MVC, improving user satisfaction scores by 25% and reducing support tickets by 35%.
              </li>
              <li>
                Resolved 50+ critical bugs and reduced bug backlog by 45% through systematic tracking and prioritization system.
              </li>
              <li>
                Created and maintained 10+ cron jobs on Virtual EC2 Servers, ensuring 99% uptime for business-critical applications.
              </li>
              <li>
                Collaborated with 3 cross-functional teams to deliver 15+ major features ahead of schedule, receiving recognition for exceptional performance.
              </li>
              <li>
                Worked in an Agile environment using JIRA, mentoring two junior developers and promoting best practices in code development and deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
