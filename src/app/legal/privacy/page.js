import { appConfig } from "@/config/app.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function privacy() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-start max-w-4xl mx-auto mt-20 gap-5">
                <h1 className="font-bold text-5xl">Privacy Policy for {appConfig.name}</h1>
                {/* Insert date */}
                <p className="font-bold ">Effective Date: </p> 
                <p>{appConfig.name} ({appConfig.domain}) values your privacy. This policy explains how we collect, use, and protect your information.</p>
                
                {/*Add <h2 className="font-bold text-3xl">Title of paragraph</h2> and <p>content of paragraph</p> for every paragraph.*/}
                
            </div>
            <Footer />
        </main>
    );
}