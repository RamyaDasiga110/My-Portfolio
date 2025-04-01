
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-white to-portfolioGray">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Ramya Shravani Dasiga
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-portfolioBlue">
              Software Developer
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              Experienced software developer with expertise in C#, ASP.NET, and web technologies. 
              Passionate about creating efficient, scalable, and user-friendly solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:ramya.shravanid@gmail.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors"
              >
                <Mail size={18} /> ramya.shravanid@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/ramya-shravani-dasiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors"
              >
                <Linkedin size={18} /> ramya-shravani-dasiga
              </a>
              <a 
                href="https://github.com/RamyaDasiga110" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors"
              >
                <Github size={18} /> RamyaDasiga110
              </a>
              <span className="flex items-center gap-2 text-gray-700">
                <Phone size={18} /> +39 351 358 7870
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <MapPin size={18} /> Pisa, Italy
              </span>
            </div>
            
            <Button className="bg-portfolioBlue hover:bg-portfolioBlue-dark text-white">
              <a href="#experience" className="flex items-center gap-2">
                View My Work <ArrowDown size={16} />
              </a>
            </Button>
          </div>
          
          <div className="md:col-span-5 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolioBlue to-portfolioBlue-light p-1 shadow-lg">
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <span className="text-portfolioBlue text-6xl font-bold">RS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
        <a 
          href="#experience" 
          className="animate-bounce p-2 bg-white rounded-full shadow-md"
          aria-label="Scroll down to experience section"
        >
          <ArrowDown size={24} className="text-portfolioBlue" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
