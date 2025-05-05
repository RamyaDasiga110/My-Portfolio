
import { Youtube, Video, Play, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 bg-gradient-to-r from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 relative">
          Creative Projects
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="glass-card bg-gradient-to-br from-white to-red-50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <Youtube size={64} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  DailyDoseWithRamya
                </h3>
                <p className="text-gray-700 mb-6">
                  My YouTube channel focuses on Travel, Lifestyle, and Food content where I share my experiences 
                  and insights. I manage end-to-end content creation including scripting, filming, voice-overs, 
                  and video editing using professional tools like Adobe Premiere Pro, Canva, and CapCut.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                    <Video size={18} className="text-red-500" />
                    <span className="text-gray-700">Original Content Creation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                    <Play size={18} className="text-red-500" />
                    <span className="text-gray-700">Video Editing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                    <Share2 size={18} className="text-red-500" />
                    <span className="text-gray-700">Social Media Strategy</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:shadow-red-200 text-white transition-all">
                    <a 
                      href="https://www.youtube.com/@DailyDoseWithRamya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      <Youtube size={18} /> Visit My Channel
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
