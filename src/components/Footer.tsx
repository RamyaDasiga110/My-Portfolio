
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ramya Shravani Dasiga</h2>
            <p className="text-gray-400 mb-6">
              Software Developer based in Pisa, Italy. Specializing in building high-quality applications with C#, ASP.NET, and modern web technologies.
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a 
                href="mailto:ramya.shravanid@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ramya-shravani-dasiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/RamyaDasiga110" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="tel:+393513587870" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ramya Shravani Dasiga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
