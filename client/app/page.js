import ConnectSection from "@/components/PageSections/ConnectSection/ConnectSection";
import Experience from "@/components/PageSections/Experience/Experience";
import Footer from "@/components/PageSections/Footer/Footer";
import HeroSection from "@/components/PageSections/HeroSection/HeroSection";
import HireMeSection from "@/components/PageSections/HireMeSection/HireMeSection";
import Navbar from "@/components/PageSections/Navbar/Navbar";
import PortfolioProjects from "@/components/PageSections/PortfolioProjects/PortfolioProjects";
import ServicesSection from "@/components/PageSections/ServicesSection/ServicesSection";
import UpButton from "@/components/ui/UpButton/UpButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <UpButton />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Experience />
      <HireMeSection />
      <PortfolioProjects />
      <ConnectSection />
      <Footer />
    </>
  );
}
