import { appConfig } from "@/config/app.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function privacy() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-start max-w-4xl mx-auto mt-20 gap-5 mb-10">
                <h1 className="font-bold text-5xl">Privacy Policy for {appConfig.name}</h1>
                {/* Insert date */}
                <p className="font-bold ">Effective Date: </p> 
                <p>{appConfig.name} ({appConfig.domain}) values your privacy. This policy explains how we collect, use, and protect your information.</p>
                
                {/*Add <h2 className="font-bold text-3xl">Title of paragraph</h2> and <p>content of paragraph</p> for every paragraph.*/}
                <h2 className="font-bold text-3xl">1. Data Collection and Use</h2>
                <p>This prototype SaaS project collects minimal data solely for testing purposes. 
                We may collect email addresses for beta access or feedback, but no sensitive personal information is required. 
                Data is used only for validating the service and will not be shared with third parties.</p>
            </div>
            <Footer />
        </main>
    );
}