import {  Urbanist } from "next/font/google";
import "./globals.css";
import "./sass/globals.scss"
import Navbar from "@/components/major/Navbar/Navbar";

const urbanist = Urbanist({subsets :["latin"], weight: "400"})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        
        </body>
    </html>
  );
}
