import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import BrandSection from "@/components/BrandSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CredentialsSection from "@/components/CredentialsSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
        <Navbar />
        <HeroSection />
        <DemoSection />
        <BrandSection />
        <HowItWorksSection />
        <CredentialsSection />
        <PricingSection />
    </main>
  );
}
