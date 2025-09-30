import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { MissionSection } from "./MissionSection";
import { FranceMapSection } from "./FranceMapSection";
import { ProcessSection } from "./ProcessSection";
import { CRMSection } from "./CRMSection";
import { ContactSectionWrapper } from "./ContactSectionWrapper";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <FranceMapSection />
      <ProcessSection />
      <CRMSection />
      <ContactSectionWrapper />
      <Footer />
    </div>
  );
}
