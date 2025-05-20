import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Briefcase, 
  Code2, 
  FolderKanban, 
  Youtube, 
  Award, 
  Mail
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  
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
    { name: "Home", href: "/myportfolio", icon: Home },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "YouTube", href: "#youtube", icon: Youtube },
    { name: "Achievements", href: "#achievements", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-md bg-white/90">
      <nav className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        {/* Logo/name */}
        <Link 
          to="/" 
          className="font-heading text-xl font-bold bg-gradient-to-r from-purple-500 to-portfolioBlue bg-clip-text text-transparent"
        >
          Ramya Shravani
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6">
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
        </div>
        
        {/* Hamburger menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 relative z-50 menu-button"
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
      </nav>
      
      {/* Professional mobile menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden mobile-menu z-40",
          isMenuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
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
            {/* Professional menu layout */}
            <div className="mx-auto max-w-lg">
              <div className="flex flex-col space-y-0.5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
