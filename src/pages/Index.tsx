import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeBanner from "../components/MarqueeBanner";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
