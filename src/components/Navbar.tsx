
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Home", href: "/myportfolio" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "YouTube", href: "#youtube" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-heading text-xl font-bold bg-gradient-to-r from-purple-500 to-portfolioBlue bg-clip-text text-transparent">
          Ramya Shravani
        </Link>
        
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
        
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl bg-gradient-to-r from-purple-500 to-portfolioBlue bg-clip-text text-transparent hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
