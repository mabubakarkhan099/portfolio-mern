import ConnectSection from "@/components/PageSections/ConnectSection/ConnectSection";
import Experience from "@/components/PageSections/Experience/Experience";
import Footer from "@/components/PageSections/Footer/Footer";
import HeroSection from "@/components/PageSections/HeroSection/HeroSection";
import HireMeSection from "@/components/PageSections/HireMeSection/HireMeSection";
import Navbar from "@/components/PageSections/Navbar/Navbar";
import PortfolioProjects from "@/components/PageSections/PortfolioProjects/PortfolioProjects";
import ServicesSection from "@/components/PageSections/ServicesSection/ServicesSection";
import ClientAnimationWrapper from "@/components/ui/AnimationsWrapper";
import ScrollToTopButton from "@/components/ui/UpButton/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <ClientAnimationWrapper>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <Experience />
        <HireMeSection />
        <PortfolioProjects />
        {/* <ConnectSection /> */}
        <Footer />
        <ScrollToTopButton />
      </ClientAnimationWrapper>

    </>
  );
}
