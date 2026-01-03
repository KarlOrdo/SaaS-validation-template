import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { appConfig } from "@/config/app.config";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
