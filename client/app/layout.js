import {  Urbanist } from "next/font/google";
import "./globals.css";
import "./sass/globals.scss"
import Navbar from "@/components/PageSections/Navbar/Navbar";

const urbanist = Urbanist({subsets :["latin"], weight: "400"})

export const metadata = {
  title: "Abubakar Khan Personal Portfolio",
  description: "Front End Web Developer with over 1 year of experience specializing in creating and implementing responsive, efficient user interfaces. Highly skilled in leveraging Next.js and related frameworks to build visually engaging, user-centric websites. A strong ability to collaborate effectively with cross-functional teams, ensuring the delivery of high-quality web solutions that enhance user experience and achieve key business objectives."
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
