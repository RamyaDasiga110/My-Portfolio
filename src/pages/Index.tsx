import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import YouTube from "@/components/YouTube";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SimpleChat from "@/components/SimpleChat";
import Languages from "@/components/Languages";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Languages /> {/* Moved here after Education */}
      <YouTube />
      <Achievements />
      <Contact />
      <Footer />
      <SimpleChat />
    </div>
  );
};

export default Index;
