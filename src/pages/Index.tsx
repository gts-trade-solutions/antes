import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import AboutSection from "@/components/AboutSection";
import OurServicesSection from "@/components/OurServicesSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <ServicesSection />
      <CompanyIntroSection />
      <AboutSection />
      <OurServicesSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
