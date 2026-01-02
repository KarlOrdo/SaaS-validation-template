import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import BrandSection from "@/components/BrandSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CredentialsSection from "@/components/CredentialsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
        <FaqSection />
        <CTASection />
        <Footer />
    </main>
  );
}
