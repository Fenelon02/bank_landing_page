import HeroSection from "./components/HeroSection"
import ValueProposition from "./components/ValueProposition"
import FeatureSection from "./components/FeaturesSection";
import MarqueeSection from "./components/MarqueeSection";
import ApiCardSection from "./components/ApiCardSection";
import OfferedServicesSection from "./components/OfferedServicesSection/OfferedServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ValueProposition/>
      <FeatureSection/>
      <MarqueeSection/>
      <ApiCardSection/>
      <OfferedServicesSection/>
    </div>
  );
}
