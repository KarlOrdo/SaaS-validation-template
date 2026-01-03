
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dpa() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-start max-w-4xl mx-auto mt-20 gap-5 mb-10">
                <h1 className="font-bold text-5xl">DataFast Data Processing Agreement (DPA)</h1>
                {/* Insert date */}
                <p className="font-bold ">Effective Date: </p> 
                <p>This Data Processing Agreement ("DPA") is between X and you, the customer. It forms part of the Terms of Service and governs how we handle personal data on your behal</p>
                
                {/*Add <h2 className="font-bold text-3xl">Title of paragraph</h2> and <p>content of paragraph</p> for every paragraph.*/}
                <h2 className="font-bold text-3xl">1. Data Processing Terms</h2>
                <p>DataFast processes personal data only for the purposes of operating and testing its prototype SaaS service. 
                We implement appropriate technical and organizational measures to protect the data and ensure it is handled securely. 
                No personal data is shared with third parties, and data is only retained for as long as necessary for testing and feedback purposes. 
                Users retain full control over their data and can request deletion at any time.</p>
            </div>
            <Footer />
        </main>
    );
}