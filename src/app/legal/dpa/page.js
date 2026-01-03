
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dpa() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-start max-w-4xl mx-auto mt-20 gap-5">
                <h1 className="font-bold text-5xl">DataFast Data Processing Agreement (DPA)</h1>
                {/* Insert date */}
                <p className="font-bold ">Effective Date: </p> 
                <p>This Data Processing Agreement ("DPA") is between X and you, the customer. It forms part of the Terms of Service and governs how we handle personal data on your behal</p>
                
                {/*Add <h2 className="font-bold text-3xl">Title of paragraph</h2> and <p>content of paragraph</p> for every paragraph.*/}
                
            </div>
            <Footer />
        </main>
    );
}