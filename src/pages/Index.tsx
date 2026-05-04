import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import Slideshow from "@/components/Slideshow";
import BackgroundSection from "@/components/BackgroundSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceAreasSection from "@/components/ExperienceAreasSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <Slideshow />
        <BackgroundSection />
        <ServicesSection />
        <ExperienceAreasSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
