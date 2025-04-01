
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-portfolioGray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-portfolioBlue bg-opacity-10 rounded-full">
                <GraduationCap size={24} className="text-portfolioBlue" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Bachelor of Engineering (B.E) in Information Science and Engineering
                </h3>
                
                <h4 className="text-lg font-medium text-portfolioBlue mt-1">
                  Sai Vidya Institute of Technology (VTU)
                </h4>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>August 2016 - August 2020</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
