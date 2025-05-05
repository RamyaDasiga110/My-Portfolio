
import React from "react";

export const WavyBackground = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
    <svg 
      viewBox="0 0 1000 1000" 
      className="absolute w-full min-w-[1000px] h-full opacity-10"
      preserveAspectRatio="none"
    >
      <path 
        d="M0,800 C150,700 300,600 450,650 C600,700 750,900 900,800 L1000,1000 L0,1000 Z" 
        className="fill-portfolioBlue-light"
      />
      <path 
        d="M0,900 C150,850 300,750 450,800 C600,850 750,950 900,900 L1000,1000 L0,1000 Z" 
        className="fill-purple-400"
      />
    </svg>
  </div>
);

export const CircleGrid = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
    {Array.from({ length: 20 }).map((_, i) => (
      <div 
        key={i}
        className={`absolute rounded-full bg-portfolioBlue bg-opacity-5 animate-pulse`}
        style={{
          width: `${Math.random() * 10 + 5}rem`,
          height: `${Math.random() * 10 + 5}rem`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 5}s`,
        }}
      />
    ))}
  </div>
);

export const DiagonalLines = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden z-0 opacity-10 ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonalLines)" className="text-portfolioBlue" />
    </svg>
  </div>
);

export const FloatingShapes = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
    {["square", "circle", "triangle"].map((shape, i) => (
      <div 
        key={shape}
        className={`absolute ${
          shape === "circle" ? "rounded-full" : 
          shape === "square" ? "rounded-md" : ""
        } bg-gradient-to-br from-portfolioBlue-light to-purple-500 opacity-20 animate-float`}
        style={{
          width: `${Math.random() * 6 + 2}rem`,
          height: `${Math.random() * 6 + 2}rem`,
          top: `${20 + Math.random() * 60}%`,
          left: `${20 + Math.random() * 60}%`,
          animationDelay: `${i * 0.8}s`,
          clipPath: shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      />
    ))}
  </div>
);

export const CreativeHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60 z-0"></div>
    <div className="absolute top-40 left-20 w-64 h-64 bg-purple-400 opacity-5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
    <div className="absolute top-10 right-40 w-40 h-40 bg-pink-400 opacity-5 rounded-full blur-3xl"></div>
    
    {/* Abstract shapes */}
    <svg className="absolute top-1/4 left-1/3 w-1/3 h-1/3 opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0E4C92" d="M40,-62.4C51.6,-56.3,60.7,-44.7,67.4,-31.4C74,-18.2,78.2,-3.1,74.9,10C71.7,23,60.9,34.2,49.8,42.9C38.7,51.5,27.2,57.8,13.7,63.5C0.3,69.2,-15.1,74.4,-29.6,72.1C-44.1,69.9,-57.8,60.2,-66.1,47.2C-74.5,34.2,-77.6,18,-76.5,2.6C-75.4,-12.7,-70,-26.6,-60.8,-36.5C-51.6,-46.4,-38.6,-52.4,-25.9,-57.5C-13.2,-62.5,-0.7,-66.6,12.2,-66.8C25,-67,38.3,-68.4,40,-62.4Z" transform="translate(100 100)" />
    </svg>
  </div>
);

// 3D-like parallax effect for hero section
export const ParallaxEffect = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-portfolioBlue/10 to-purple-500/10 rounded-full blur-xl"
        style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-portfolioBlue-light/10 rounded-full blur-xl"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </div>
  );
};
