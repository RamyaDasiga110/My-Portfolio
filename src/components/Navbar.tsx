import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/use-responsive";
import { 
  Home, 
  Briefcase, 
  Code2, 
  FolderKanban, 
  Youtube, 
  Award, 
  Mail,
  FileDown,
  GraduationCap,
  Languages // Add this import
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { isTablet, isDesktop } = useResponsive();
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Languages", href: "#languages", icon: Languages }, // Add this line
    { name: "YouTube", href: "#youtube", icon: Youtube },
    { name: "Achievements", href: "#achievements", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-md bg-white/90">
      <nav className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        {/* Logo/name */}
        <a 
          href="#home" 
          className="font-heading text-xl font-bold bg-gradient-to-r from-purple-500 to-portfolioBlue bg-clip-text text-transparent"
        >
          Ramya Shravani
        </a>
        
        {/* Desktop navigation - only visible on desktop, not on tablet */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-purple-500 relative group transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-portfolioBlue group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          {/* CV Download Link - Desktop */}
          <a 
            href={`${import.meta.env.BASE_URL}Ramya_CV.pdf`}
            download="Ramya_CV.pdf"
            className="ml-2 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-3 py-1.5 rounded-full hover:shadow-md transition-all"
          >
            <FileDown size={14} />
            <span>CV</span>
          </a>
        </div>
        
        {/* Mobile/Tablet actions container */}
        <div className="lg:hidden flex items-center gap-2">
          {/* CV Download Link - Mobile Outside Menu */}
          <a 
            href={`${import.meta.env.BASE_URL}Ramya_CV.pdf`}
            download="Ramya_CV.pdf"
            className={`flex items-center gap-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs px-2 py-1 rounded-full hover:shadow-md transition-all mr-2`}
            aria-label="Download CV"
          >
            <FileDown size={12} />
            <span className="sm:inline">CV</span>
          </a>
          
          {/* Hamburger menu button */}
          <button 
            className="flex flex-col justify-center items-center w-9 h-9 relative z-50 menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu" 
          >
            <span 
              className={cn(
                "w-5 h-0.5 bg-gray-800 rounded transition-all duration-300",
                isMenuOpen ? "absolute rotate-45" : "mb-1.5"
              )}
            ></span>
            <span 
              className={cn(
                "w-5 h-0.5 bg-gray-800 rounded transition-all duration-300",
                isMenuOpen ? "opacity-0" : "mb-1.5"
              )}
            ></span>
            <span 
              className={cn(
                "w-5 h-0.5 bg-gray-800 rounded transition-all duration-300",
                isMenuOpen ? "absolute -rotate-45" : ""
              )}
            ></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile/Tablet menu */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 right-0 shadow-lg transform transition-all duration-300 ease-in-out overflow-auto mobile-menu z-40 bg-white",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="relative bg-gradient-to-br from-white to-purple-50/30">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, purple 2px, transparent 0)`, 
            backgroundSize: '30px 30px' 
          }}></div>
          
          {/* Menu content container */}
          <div className="relative z-10 px-4 py-5">
            {/* Menu layout - grid for tablet, column for mobile */}
            <div className={`mx-auto ${isTablet ? "max-w-3xl" : "max-w-lg"}`}>
              <div className={`${isTablet ? "grid grid-cols-2 gap-3" : "flex flex-col space-y-2"}`}>
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg transition-all",
                        "bg-white border border-gray-100/80 shadow-sm hover:shadow",
                        activeIndex === index ? "bg-purple-50" : ""
                      )}
                      onClick={() => {
                        setActiveIndex(index);
                        setTimeout(() => setIsMenuOpen(false), 300);
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      <div className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-full mr-4 transition-colors",
                        activeIndex === index ? 
                          "bg-gradient-to-br from-purple-600 to-blue-500 text-white" : 
                          "bg-purple-100 text-purple-700"
                      )}>
                        <Icon size={16} />
                      </div>
                      <span className={cn(
                        "font-medium transition-colors",
                        activeIndex === index ? 
                          "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent" :
                          "text-gray-700"
                      )}>
                        {item.name}
                      </span>
                    </a>
                  );
                })}
                
                {/* CV Download Link - Mobile/Tablet */}
                <a
                  href={`${import.meta.env.BASE_URL}Ramya_CV.pdf`}
                  download="Ramya_CV.pdf"
                  className={`flex items-center px-4 py-3 rounded-lg transition-all bg-gradient-to-r from-purple-600 to-blue-500 text-white border border-purple-700/20 shadow-sm hover:shadow mt-4 ${isTablet ? "col-span-2" : ""} w-full download-cv-mobile`}
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 300);
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full mr-4 bg-white/20">
                    <FileDown size={16} className="text-white" />
                  </div>
                  <span className="font-medium">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
