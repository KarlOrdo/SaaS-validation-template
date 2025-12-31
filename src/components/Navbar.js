import { appConfig } from "@/config/app.config";
import Image from "next/image";
import Link from "next/link";
import ButtonLogin from "./ButtonLogin";

export default function Navbar () {
    return (
        <nav className="border-b border-white/3">
            <div className="flex flex-row p-4 max-w-7xl mx-auto justify-between">
                <div>
                    <Link className="flex flex-row items-center" href={"/"}>
                        <Image src={appConfig.logoSrc} width={40} height={40} alt="Logo" />
                        <span className="font-bold text-lg">{appConfig.name}</span>
                    </Link>
                </div>

                <div className="space-x-10 mt-2">
                    <a className="link link-hover" href="#pricing">Pricing</a>
                    <a className="link link-hover" href="#faq">FAQ</a>
                    <a className="link link-hover" href="#reviews">Reviews</a>
                </div>
                
                <ButtonLogin />
            </div>
        </nav>
    );   
}