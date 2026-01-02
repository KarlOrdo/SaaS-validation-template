import { appConfig } from "@/config/app.config";
import ButtonLogin from "./ButtonLogin";
import HappyUsers from "./HappyUsers";

export default function CTASection() {
    return(
       <div className="flex justify-center mb-20 mx-3">
            <div className="shadow-2xl rounded-3xl bg-base-200/80 max-w-3xl text-center border-6 border-base-content/10 p-10">
                <h2 className="font-bold text-4xl">{appConfig.landing.longerCTAText}</h2>
                <ButtonLogin text={appConfig.landing.defaultCTAText} styling={"btn-accent rounded-xl shadow-lg text-white shadow-accent/17 font-bold p-5 py-7 text-3xl mt-10"}/>
                <p className="text-xs mt-1 text-base-content/30">35% off for the first 2000 customers (9 left)</p>
                <HappyUsers />
            </div>
       </div>
    );
}