import { HeroSection } from "@/components/layout/sections/hero";
import { WorksSection } from "@/components/layout/sections/WorksSection";
import { ArtSection } from "@/components/layout/sections/ArtSection";
import { AboutSection } from "@/components/layout/sections/AboutSection";
import { ContactSection } from "@/components/layout/sections/Contact";
import { ArchiveSection } from "@/components/layout/sections/ArchiveSection";



export default function Home() {

  return (
    <>
      <HeroSection className="lg:px-32" />
      <AboutSection className="lg:px-32 lg:pt-32" />
      <WorksSection className="lg:px-32 lg:pt-32" />
      <ArtSection className="lg:px-32 lg:pt-24" />
      <ContactSection className="lg:px-32 lg:pt-24" />
      <ArchiveSection 
      />
    </>
  );
}
