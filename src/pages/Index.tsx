import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeBanner from "../components/MarqueeBanner";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    document.title = "Avinya Interactive | 3D, VFX, AI & Software Development";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Avinya Interactive crafts immersive digital experiences through 3D, VFX, AI solutions, and cutting-edge software development. Based in India, serving globally.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
