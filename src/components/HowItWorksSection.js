import { appConfig } from "@/config/app.config"
import Image from "next/image"
import ButtonLogin from "./ButtonLogin";

export default function HowItWorksSection() {
    


        return(
        <div className="flex flex-col items-center  bg-base-200 p-20 border-t-2 border-b-2 border-base-content/10">
            <p className="uppercase text-accent font-semibold mt-10">How it works?</p>
            <h2 className="text-center font-bold text-5xl mt-2 max-md:mx-5">
                {appConfig.landing.howItWorks.title}
            </h2>

            
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8">

                <div className="card bg-base-100 w-90 shadow-xl rounded-3xl border-9 border-base-content/15 mt-9 md:mt-15 overflow-hidden">
                    <figure>
                        <div className="relative w-full h-55">
                            <Image src={appConfig.landing.howItWorks.step1Photo} fill style={{ objectFit: 'cover' }} alt="Git commands graphic"/>
                        </div>
                    </figure>
                    <div className="card-body bg-base-300 flex flex-col justify-between min-h-40">
                        <h2 className="card-title">1. {appConfig.landing.howItWorks.step1Title}</h2>
                        <p className="mb-2">{appConfig.landing.howItWorks.step1Description}</p>
                        
                    </div>
                </div>

                
                <div className="hidden xl:flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-base-content/60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                <div className="card bg-base-100 w-90 shadow-xl rounded-3xl border-9 border-base-content/15 mt-9 md:mt-15 overflow-hidden">
                    <figure>
                        <div className="relative w-full h-55">
                            <Image alt="settings gif" src={appConfig.landing.howItWorks.step2Photo} fill style={{ objectFit: 'cover' }} unoptimized={true}/>
                        </div>
                    </figure>
                    <div className="card-body bg-base-300 flex flex-col justify-between min-h-40">
                        <h2 className="card-title">2. {appConfig.landing.howItWorks.step2Title}</h2>
                        <p className="mb-2">{appConfig.landing.howItWorks.step2Description}</p>
                        
                    </div>
                </div>

                
                <div className="hidden xl:flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-base-content/60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                <div className="card bg-base-100 w-90 shadow-xl rounded-3xl border-9 border-base-content/15 mt-9 md:mt-15 overflow-hidden">
                    <figure>
                        <div className="relative w-full h-55">
                            <Image src={appConfig.landing.howItWorks.step3Photo} fill style={{ objectFit: 'cover' }}  alt="Stripe revenue"/>
                        </div>
                    </figure>
                    <div className="card-body bg-base-300 flex flex-col justify-between min-h-40">
                        <h2 className="card-title">3. {appConfig.landing.howItWorks.step3Title}</h2>
                        <p className="mb-2">{appConfig.landing.howItWorks.step3Description}</p>
                        
                    </div>
                </div>

                
            </div>

            <ButtonLogin styling={"btn-accent text-3xl font-bold p-4 rounded-xl py-7 text-white mt-20"} text={appConfig.landing.defaultCTAText}/>
        </div>
    );
}