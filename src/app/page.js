import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
        <Navbar text={"Login"} styling={"rounded-md border-white/5"}/>
        <HeroSection />
        <DemoSection />
    </main>
  );
}
