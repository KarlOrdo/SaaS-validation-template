import { appConfig } from "@/config/app.config";
import ButtonLogin from "./ButtonLogin";
import HappyUsers from "./HappyUsers";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-18 text-center p-3">
            <h1 className="text-5xl md:text-6xl font-bold max-w-2xl">{appConfig.landing.heroTitle}</h1>
            <p className="mt-10 max-w-xl font-light text-lg">{appConfig.landing.heroDescription}</p>
            <ButtonLogin text={appConfig.landing.defaultCTAText} 
                styling={"btn-accent rounded-xl shadow-lg text-white shadow-accent/17 font-bold p-5 py-7 text-3xl mt-10"}/>
            <p className="text-xs mt-1 text-base-content/30">35% off for the first 2000 customers (9 left)</p>
            
            <HappyUsers />
           

        </div>
    );
}