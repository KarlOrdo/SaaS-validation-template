import { appConfig } from "@/config/app.config";
import ButtonBuy from "./ButtonBuy";

export default function PricingSection() {
    return(
        <div id="pricing" className="bg-base-300 border-t-2 border-b-2 border-base-content/10 flex flex-col items-center ">
            <p className="uppercase text-accent font-semibold mt-30">Pricing</p>
            <h2 className="text-center font-bold text-5xl mt-2 max-md:mx-5">Choose the plan that fits your needs</h2>
            
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-x-15">
                {appConfig.landing.plans.map((item, index)=> {
                return(
                    <div className="my-17" key={index}>
                    <div className="flex flex-col justify-around min-h-120 max-w-100 shadow-2xl rounded-3xl border-9 border-base-content/10 bg-base-100 p-9">
                        <p className="uppercase font-medium text-lg">{item.title}</p>
                        <div className="mt-3 flex items-baseline gap-1">
                            <span className="font-bold text-6xl">{item.price}</span> 
                            <span className="font-semibold opacity-70">{item.type === "subscription" ? " /month" : " /for life time access"}</span>
                        </div>
                        
                        <ul className="mt-8">
                        {item.features.map((feature, index)=>(
                            
                            <li className="flex items-center mt-3 text-lg gap-3" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                </svg>

                                {feature}
                            </li>
                        ))}
                        </ul>

                        <ButtonBuy />
                       
                    </div>
                </div>
                );
            })}
            </div>
            
        </div>
    );
}