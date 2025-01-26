import { HeroSection } from "@/components/layout/sections/hero";
import { IntroSection } from "@/components/layout/sections/IntroSection";
import { ArtSection } from "@/components/layout/sections/ArtSection";
import { ArchiveSection } from "@/components/layout/sections/ArchiveSection";
export const metadata = {
  title: "Hujianbo - Landing page",
  description: "Hujianbo - Landing page",
};

export default function Home() {
  return (
    <>
      <HeroSection className="lg:px-32" />
      <IntroSection className="lg:px-32" />
      <ArtSection className="lg:px-32" />
    </>
  );
}
