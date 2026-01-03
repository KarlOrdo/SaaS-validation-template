"use client";
import { appConfig } from "@/config/app.config";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ButtonBuy() {
    
    // Button opens a modal for the user to sign up for the waitlist.
    // If they do so, their email is saved in the database.
    // I also added a soft protection against spamming emails by saving NumberOfSends in localStorage.


    const [isOpen, setIsOpen] = useState(false);
    
    const [email, setEmail] = useState("");
    const [NumberOfSends, setNumberOfSends] = useState(0)

    useEffect(()=>{
        setNumberOfSends(Number(localStorage.getItem("NumberOfSends")));
        
    },[]);
    
    const toggleOpen = () => setIsOpen(!isOpen);
    
    const handleModalSubmit = async(event) => {
        event.preventDefault();
        try{
            if(NumberOfSends < 3) {
                await axios.post("/api/email", {email: email});
                toast.success("Email added successfully");
                const newCount = NumberOfSends + 1;
                setNumberOfSends(newCount);
                localStorage.setItem("NumberOfSends", newCount.toString())
                
            }else{
                toast.error("You have already sent your email")
            }
        }catch(e) {
            toast.error(e?.response?.data?.error || e?.message || "Something went wrong")
        }
    }
    return (
        <>
            <button onClick={toggleOpen} className="btn btn-accent text-white font-bold py-7 shadow-2xl rounded-xl mt-10 text-xl">
            {appConfig.landing.defaultCTAText}
            </button>


            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-md">
                    <div className="bg-base-300 h-min border-9 border-base-content/10 p-12 rounded-3xl shadow-xl relative max-w-xl">

                        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onClick={toggleOpen}>
                            X
                        </button>
                        <h2 className="text-2xl">We’re still finalizing the product</h2>
                        <p className="mt-2">
                        Leave your email to reserve an 35% discount and we’ll notify you as soon as we launch.
                        </p>
                        <form onSubmit={handleModalSubmit} className="flex items-baseline">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="E-mail" className="input mt-2" />
                            <button type="submit" className="btn btn-accent ml-1">Reserve discount</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}