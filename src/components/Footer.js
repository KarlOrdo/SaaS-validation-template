import Image from "next/image"
import { appConfig } from "@/config/app.config"
import Link from "next/link";

export default function Footer() {
    
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="bg-base-300 border-t-2 border-b-2 border-base-content/10 ">
           <div className="mt-25 flex flex-col items-center gap-10 text-center mb-10 md:flex-row md:justify-center md:gap-x-35">
                
                <div className="flex flex-col gap-2 max-w-xs ">
                    <div className="flex justify-center items-center ">
                        <Image src={appConfig.logoSrc} width={30} height={30} alt="Logo" />
                        <span className="font-bold text-lg">{appConfig.name}</span>
                    </div>
                    <p className="opacity-70">{appConfig.description}</p>
                    <p className="opacity-70 font-semibold">Copyright © {currentYear} - All rights reserved</p>     
                </div>  
                
                <div className="flex flex-col gap-2  max-w-xs ">
                    <span className="uppercase opacity-90 text-lg font-bold">Links</span>
                    <a className="link link-hover" href={"/#pricing"}>Pricing</a>
                    <a className="link link-hover" href={"/#faq"}>FAQ</a>
                    <a className="link link-hover" href={"/#reviews"}>Reviews</a>
                </div >
                
                <div className="flex flex-col gap-2  max-w-xs ">   
                    <span className="uppercase opacity-90 text-lg font-bold">Legal</span>
                    <Link href={"/legal/tos"} className="link link-hover">Terms of services</Link>
                    <Link href={"/legal/privacy"} className="link link-hover">Privacy policy</Link>
                    <Link href={"/legal/dpa"} className="link link-hover">Data processing agreement</Link>
                </div>
           </div>
        </footer>
    )
}