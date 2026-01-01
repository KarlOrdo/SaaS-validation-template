import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import BrandSection from "@/components/BrandSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <main>
        <Navbar text={"Login"} styling={"rounded-md border-white/5"}/>
        <HeroSection />
        <DemoSection />
        <BrandSection />
        <HowItWorksSection />
    </main>
  );
}
