import { appConfig } from "@/config/app.config";
import Image from "next/image";


export default function BrandSection() {
    return(
        
    <div className="max-w-200 mx-auto relative justify-center flex flex-col text-center mt-3 md:mt-8">
        {appConfig.landing.brandsTitle && (
            <p className="uppercase mt-5 font-semibold opacity-20">{appConfig.landing.brandsTitle}:</p>
        )}
        <Image 
        src={appConfig.landing.brandsLogosSrc} 
        width={2540}
        height={300}
        alt="Brands"
        />
    </div>
        
    );
}