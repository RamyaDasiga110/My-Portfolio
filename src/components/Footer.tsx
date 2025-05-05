
import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ramya Shravani Dasiga</h2>
            <p className="text-gray-300 mb-6">
              Software Developer based in Pisa, Italy. Specializing in building high-quality applications with C#, ASP.NET, and modern web technologies. Also a passionate content creator on YouTube.
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-lg font-medium mb-4 text-gray-300">Connect With Me</h3>
            <div className="flex flex-wrap gap-6 md:justify-end">
              <a 
                href="mailto:ramya.shravanid@gmail.com" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-gray-300 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/ramya-shravani-dasiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-gray-300 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/RamyaDasiga110" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-gray-300 hover:bg-gray-700 hover:text-white transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@DailyDoseWithRamya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-gray-300 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="tel:+393513587870" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-gray-300 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ramya Shravani Dasiga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
