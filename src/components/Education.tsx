
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Education
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-opacity-80 backdrop-blur-sm animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-portfolioBlue to-purple-500 rounded-full text-white">
                <GraduationCap size={24} className="text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent">
                  Bachelor of Engineering (B.E) in Information Science and Engineering
                </h3>
                
                <h4 className="text-lg font-medium text-gray-700 mt-1">
                  Sai Vidya Institute of Technology (VTU)
                </h4>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-portfolioBlue" />
                    <span>August 2016 - August 2020</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-portfolioBlue" />
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
