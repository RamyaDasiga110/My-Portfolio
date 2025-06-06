import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DiagonalLines } from "./DecorativeElements";
import { useResponsive } from "@/hooks/use-responsive";
import { Languages as LanguagesIcon, GraduationCap, BookOpen, Speech, Book } from "lucide-react";

const Languages = () => {
  const { isTablet } = useResponsive();
  const languages = [
    {
      name: "Telugu",
      level: "Mother Tongue",
      proficiency: 100,
      icon: Speech // Speech icon for mother tongue
    },
    {
      name: "English",
      level: "Professional Working Proficiency",
      proficiency: 95,
      icon: LanguagesIcon // Languages icon for professional language
    },
    {
      name: "Italian",
      level: "Basic Communication",
      proficiency: 40,
      icon: BookOpen // BookOpen for learning language
    },
    {
      name: "Kannada",
      level: "Native Proficiency",
      proficiency: 95,
      icon: Book // Book for native language
    },
    {
      name: "Hindi",
      level: "Fluent",
      proficiency: 80,
      icon: GraduationCap // GraduationCap for learned language
    }
  ];

  return (
    <section id="languages" className="w-full relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full">
        <svg className="absolute top-10 right-10 h-64 w-64 text-portfolioBlue opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45,-65.1C59.1,-56.3,72,-43.5,77.8,-27.9C83.7,-12.2,82.6,6.4,77.4,23.5C72.2,40.5,63.1,56.2,49.3,65.2C35.5,74.3,17.8,76.7,0.2,76.5C-17.3,76.2,-34.5,73.2,-46.7,63.4C-58.9,53.7,-66.1,37,-69.7,20.7C-73.3,4.4,-73.2,-11.4,-67.5,-24.5C-61.8,-37.6,-50.6,-48,-38,-57.4C-25.4,-66.7,-12.7,-74.9,1.9,-77.7C16.6,-80.5,33.1,-77.8,45,-65.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-10 left-10 h-48 w-48 text-portfolioBlue opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M31.5,-37.4C44.4,-29.5,60.8,-23.4,67.9,-11.3C75,0.8,72.9,19,64.6,31.8C56.4,44.7,42,52.3,27.7,56.7C13.4,61.2,-0.9,62.6,-16.4,60.1C-31.9,57.6,-48.6,51.2,-59.6,39C-70.6,26.7,-76,8.5,-73,-8.1C-69.9,-24.8,-58.5,-40.1,-44.3,-48.1C-30.1,-56,-15.1,-56.8,-2.1,-54C10.8,-51.3,21.7,-45.3,31.5,-37.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title mb-8 relative">
          Languages Known
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className={`mt-12 grid grid-cols-1 ${isTablet ? 'gap-4' : 'gap-6'} md:grid-cols-2 lg:grid-cols-3`}>
          {languages.map((language, index) => (
            <Card key={language.name} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80"></div>
              <DiagonalLines className="opacity-5" />
              <CardContent className={`relative z-10 ${isTablet ? 'p-4' : 'p-6'}`}>
                <div className="flex items-center gap-3">
                  <div className={`${isTablet ? 'p-2' : 'p-3'} rounded-md bg-gradient-to-br from-portfolioBlue to-purple-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <language.icon size={isTablet ? 20 : 24} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`${isTablet ? 'text-base' : 'text-lg'} font-bold text-gray-800 transition-colors group-hover:text-portfolioBlue`}>
                      {language.name}
                    </h3>
                    <Badge variant="secondary" className="text-sm">
                      {language.level}
                    </Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-portfolioBlue to-purple-500 transition-all duration-500"
                      style={{ width: `${language.proficiency}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;