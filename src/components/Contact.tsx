
import { Mail, MessageSquare } from "lucide-react";
import { DiagonalLines } from "./DecorativeElements";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <DiagonalLines />
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative inline-block">
          Get In Touch
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-portfolioBlue rounded-full"></div>
        </h2>
        
        <div className="max-w-lg mx-auto mt-12">
          <div className="bg-gradient-to-br from-purple-500 to-portfolioBlue p-[2px] rounded-lg animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-portfolioBlue bg-clip-text text-transparent flex items-center gap-2">
                <MessageSquare className="text-purple-500" size={20} /> Professional Inquiries
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  I am currently available for new opportunities in software development. If you're interested in discussing potential collaborations or have any questions about my work, please don't hesitate to reach out.
                </p>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={18} className="text-purple-500" /> 
                  <a href="mailto:ramya.shravanid@gmail.com" className="hover:text-purple-500 transition-colors">
                    ramya.shravanid@gmail.com
                  </a>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">
                    "Combining technical expertise with creative problem-solving to deliver elegant solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
