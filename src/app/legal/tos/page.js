import { appConfig } from "@/config/app.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tos() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-start max-w-4xl mx-auto mt-20 gap-5">
                <h1 className="font-bold text-5xl">Terms and Conditions for {appConfig.name}</h1>
                {/* Insert date */}
                <p className="font-bold ">Effective Date: </p> 
                <p>Welcome to {appConfig.name} ({appConfig.domain}). By using our website and services, you agree to comply with the following terms.</p>
                
                {/*Add <h2 className="font-bold text-3xl">Title of paragraph</h2> and <p>content of paragraph</p> for every paragraph.*/}
                {/* Example below. */}
                
                <h2 className="font-bold text-3xl">1. Overview</h2>
                <p>ValideFast is a boilerplate for creating SaaS pages. It allows users to build their own SaaS landing page.</p>
            </div>
            <Footer />
        </main>
    );
}