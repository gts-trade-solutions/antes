
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CompanyIntroSection from "../components/CompanyIntroSection";
import AboutSection from "../components/AboutSection";
import OurServicesSection from "../components/OurServicesSection";

import Footer from "../components/Footer";
import ClientsSection from "../components/ClientSection";
import ProductsPaletteSection from "../components/ProductSection";

export default function Index() {
  return (
    <div className="min-h-screen">
     
      <Header />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <ProductsPaletteSection />
      <CompanyIntroSection />
      <AboutSection />
      <OurServicesSection />
    
      <Footer />
    </div>
  );
}
