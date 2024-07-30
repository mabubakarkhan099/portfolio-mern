import {  Urbanist } from "next/font/google";
import "./globals.css";
import "./sass/globals.scss"
import Navbar from "@/components/PageSections/Navbar/Navbar";

const urbanist = Urbanist({subsets :["latin"], weight: "400"})

export const metadata = {
  title: "Abubakar Khan Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} relative`}>
        {/* <Navbar /> */}
        {children}
        
        </body>
    </html>
  );
}
