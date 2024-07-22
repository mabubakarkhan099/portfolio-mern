
import ConnectSection from "@/components/PageSections/ConnectSection/ConnectSection";
import Experience from "@/components/PageSections/Experience/Experience";
import HeroSection from "@/components/PageSections/HeroSection/HeroSection";
import HireMeSection from "@/components/PageSections/HireMeSection/HireMeSection";
import PortfolioProjects from "@/components/PageSections/PortfolioProjects/PortfolioProjects";
import ServicesSection from "@/components/PageSections/ServicesSection/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Experience />
      <HireMeSection />
      <PortfolioProjects />
      <ConnectSection />
    </>
  );
}
