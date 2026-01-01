import { appConfig } from "@/config/app.config"
import Image from "next/image"

export default function CredentialsSection() {
    return(
        <div id="reviews" className="flex flex-col items-center lg:items-baseline mt-15 gap-30 lg:flex-row lg:max-w-7xl lg:mx-auto lg:my-50 mb-20">
            {appConfig.landing.usersOpinions.map((item, index)=> (
                <div className="max-w-sm text-center font-medium text-xl flex flex-col items-center gap-y-4 mx-3" key={index}>
                    
                    <Image draggable={"false"} className="w-30 h-auto" src={"/stars.png"} width={1400} height={350} alt="5 star graphic"/>
                    <p>{item.opinion}</p>
                    
                    <div className="flex flex-row items-center ">
                        <div className="avatar">
                            <div className="w-13">
                            <Image className="rounded-full" src={item.avatar} fill alt="avatar"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <span className="text-xl font-extrabold">{item.name}</span>
                            <span className="text-sm font-normal opacity-70">{item.role}</span>
                        </div>
                    </div>
                
                </div>
            ))}
        </div>
    )
}