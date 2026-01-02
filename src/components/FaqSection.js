"use client";
import { appConfig } from "@/config/app.config";
import { useState } from "react";

export default function FaqSection() {
    // Przechowujemy tylko index otwartego elementu. Jeśli null - wszystko zamknięte.
    const [openedIndex, setOpenedIndex] = useState(null);

    function handleOpen(index) {
        setOpenedIndex(openedIndex === index ? null : index);
    }

    return (
        <div id="faq" className="py-20">
            <div className="flex flex-col items-center">
                <p className="uppercase text-accent font-semibold">FAQ</p>
                <h2 className="font-bold text-5xl mt-2 max-md:mx-5 text-center">Frequently asked questions</h2>
                
                <ul className="max-w-3xl mx-auto my-15 w-full px-5">
                    {appConfig.landing.faq.map((item, index) => {
                        const isOpen = openedIndex === index;
                        
                        return (
                            <li 
                                key={index} 
                                className="flex flex-col bg-base-200/20 hover:bg-base-200/50 p-5 w-full font-semibold text-xl rounded-2xl mt-5 border-4 border-base-content/10 cursor-pointer transition-all"
                                onClick={() => handleOpen(index)}
                            >
                                
                                <div className="flex justify-between items-center">
                                    <span>{item.question}</span>
                                    
                                    
                                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            {isOpen ? (
                                                <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                            ) : (
                                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                            )}
                                        </svg>
                                    </div>
                                </div>

                                
                                <div className={`grid transition-all duration-300 ease-in-out ${
                                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                                }`}>
                                    <div className="overflow-hidden text-base font-normal text-base-content/80">
                                        {item.answer}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}