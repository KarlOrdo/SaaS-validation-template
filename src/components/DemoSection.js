import { appConfig } from "@/config/app.config";
import Image from "next/image";

export default function DemoSection() {
    return(
    <div className="mt-10 relative max-w-200 mx-auto aspect-video">   
        <Image 
            src={appConfig.landing.demoSrc} 
            fill
            alt="Demo"
            className="object-cover"
            priority
            loading="eager"
        />
    </div> 
    );
}