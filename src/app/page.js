import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import BrandSection from "@/components/BrandSection";

export default function Home() {
  return (
    <main className="">
        <Navbar text={"Login"} styling={"rounded-md border-white/5"}/>
        <HeroSection />
        <DemoSection />
        <BrandSection />
    </main>
  );
}
