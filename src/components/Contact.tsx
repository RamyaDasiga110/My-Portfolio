
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DiagonalLines } from "./DecorativeElements";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <DiagonalLines />
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-portfolioBlue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title mb-8 relative">
          Get In Touch
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                <Mail className="text-portfolioBlue" size={20} /> Contact Me
              </h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    className="border-gray-200 focus:border-portfolioBlue focus:ring-portfolioBlue" 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="border-gray-200 focus:border-portfolioBlue focus:ring-portfolioBlue" 
                  />
                </div>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Subject" 
                    className="border-gray-200 focus:border-portfolioBlue focus:ring-portfolioBlue" 
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="border-gray-200 focus:border-portfolioBlue focus:ring-portfolioBlue min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-portfolioBlue to-purple-600 hover:shadow-lg hover:shadow-portfolioBlue/20 group">
                  <span className="flex items-center gap-2">
                    Send Message 
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-portfolioBlue to-purple-500 p-[2px] rounded-lg animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-portfolioBlue to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                    <MessageSquare className="text-portfolioBlue" size={20} /> Let's Connect
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      I'm currently open to new opportunities in software development. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail size={18} className="text-portfolioBlue" /> 
                      <a href="mailto:ramya.shravanid@gmail.com" className="hover:text-portfolioBlue transition-colors">
                        ramya.shravanid@gmail.com
                      </a>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 italic">
                        "Coding is not just about making things work, it's about crafting solutions that inspire."
                      </p>
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

export default Contact;
