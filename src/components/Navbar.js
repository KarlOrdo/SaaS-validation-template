import { appConfig } from "@/config/app.config";
import Image from "next/image";
import Link from "next/link";
import ButtonLogin from "./ButtonLogin";

export default function Navbar () {
    return (
        <nav className="border-b border-white/3 ">
            <div className="flex flex-row justify-between md:grid md:grid-cols-3 md:items-center p-4 max-w-7xl mx-auto">
                <div>
                    <Link className="flex flex-row items-center" href={"/"}>
                        <Image src={appConfig.logoSrc} width={40} height={40} alt="Logo" />
                        <span className="font-bold text-lg">{appConfig.name}</span>
                    </Link>
                </div>

                <div className="md:flex justify-center space-x-10 hidden">
                    <a className="link link-hover" href="#pricing">Pricing</a>
                    <a className="link link-hover" href="#faq">FAQ</a>
                    <a className="link link-hover" href="#reviews">Reviews</a>
                </div>
                
                <div className="flex justify-end">
                    <ButtonLogin styling={"rounded-md border-white/5"} text={"Login"}/>
                </div>
            </div>
        </nav>
    );   
}