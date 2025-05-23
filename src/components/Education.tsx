
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { WavyBackground } from "./DecorativeElements";
import { useResponsive } from "@/hooks/use-responsive";

const Education = () => {
  const { isTablet } = useResponsive();
  
  return (
    <section id="education" className="py-20 bg-gradient-to-r from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <WavyBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          Education
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-8">
          {/* Executive Master's Degree */}
          <div className="relative">
            {/* Decorative graduation cap */}
            <div className="absolute -top-10 -right-10 text-portfolioBlue opacity-10 text-8xl">🎓</div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-opacity-80 backdrop-blur-sm animate-fade-in opacity-0 relative" style={{ animationDelay: '0.1s' }}>
              {/* Decorative dots pattern */}
              <div className="absolute inset-0 bg-white opacity-70">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(14, 76, 146, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-portfolioBlue to-purple-500 rounded-full text-white shadow-md">
                  <GraduationCap size={24} className="text-white" />
                </div>
                
                <div className={isTablet ? 'flex-1' : ''}>
                  <h3 className={`text-xl font-bold text-gray-800 bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent ${isTablet ? 'text-lg' : ''}`}>
                    Master of Science (M.S) in Data Science and Business Informatics
                  </h3>
                  
                  <h4 className="text-lg font-medium text-gray-700 mt-1">
                    University of Pisa (UniPi)
                  </h4>
                  
                  <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600 ${isTablet ? 'flex-row flex-wrap items-center' : ''}`}>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-portfolioBlue" />
                      <span>November 2024 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-portfolioBlue" />
                      <span>Pisa, Italy</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolioBlue">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <a 
                        href="mailto:r.dasiga@studenti.unipi.it" 
                        className="text-portfolioBlue hover:underline transition-all"
                      >
                        r.dasiga@studenti.unipi.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bachelor's Degree */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-opacity-80 backdrop-blur-sm animate-fade-in opacity-0 relative" style={{ animationDelay: '0.2s' }}>
              {/* Decorative dots pattern */}
              <div className="absolute inset-0 bg-white opacity-70">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(14, 76, 146, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-portfolioBlue to-purple-500 rounded-full text-white shadow-md">
                  <GraduationCap size={24} className="text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent">
                    Bachelor of Engineering (B.E) in Information Science and Engineering
                  </h3>
                  
                  <h4 className="text-lg font-medium text-gray-700 mt-1">
                    Sai Vidya Institute of Technology (VTU)
                  </h4>
                  
                  <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600 ${isTablet ? 'flex-row flex-wrap items-center' : ''}`}>
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
      </div>
    </section>
  );
};

export default Education;
