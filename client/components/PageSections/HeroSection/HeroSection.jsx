import { Button } from "@/components/ui/button"; // Importing custom Button component
import React from "react";
import "./HeroSection.scss"; // Importing styles for the HeroSection
import Image from "next/image"; // Importing Image component for optimized images
import { FaFileDownload, FaQuoteLeft, FaStar, FaFileAlt } from "react-icons/fa"; // Importing icons from react-icons
import Link from "next/link";

function HeroSection() {
  const resumeLink = process.env.RESUME_LINK;

  return (
    <div className="container relative pt-10 hero-section">
      {/* Centered container for the hero section */}
      <div className="flex justify-center">
        <div className="text-center">
          {/* Greeting button */}
          <Button className="button btn-hello bg-white text-black outline outline-1 relative hover:bg-white cursor-default" id="heroHelloButton">
            Hello
          </Button>
          {/* Main heading */}
          <div className={`info-heading font-extrabold mobile:text-4xl sm:text-5xl md:text-8xl mt-5 relative`} id="heroHeading">
            <h1>
              <span className="im-heading">I&rsquo;m </span>
              <span className="text-orange-400 khan-heading">Khan</span>
              <span className="coma-heading">&sbquo;</span>
            </h1>
            <h1>
              <span className="webdev-heading">Web Developer</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Grid layout for image and additional information */}
      <div className="grid grid-cols-8 h-100 relative image-grid">
        {/* Left side (desktop view) */}
        <div className="mobile:hidden sm:block col-span-2">
          <div className="grid gap-5 font-bold">
            {/* Quote icon and testimonial */}
            <div>
              <FaQuoteLeft className="text-3xl" />
            </div>
            <p>
              Khan&rsquo;s Exceptional Web Services <br /> ensure our website&rsquo;s success. Highly Recommended
            </p>
          </div>
        </div>

        {/* Center section with profile image and call-to-action */}
        <div className="mobile:col-span-8 sm:col-span-4">
          <div className="image-wrapper">
            {/* Profile image */}
            <Image src="/profilepic.png" width={400} height={100} alt="Profile Picture" />
          </div>
          <div className="hire-btn-wrapper p-2 rounded-full flex items-center gap-3">
            {/* Resume download button */}
            <Button className="button bg-orange-400 hover:bg-black">
              <Link href={resumeLink} target="_blank" className="flex items-center">
                Resume <FaFileAlt className="ms-2" />
              </Link>
            </Button>
            {/* Hire Me text */}
            <p className="mb-0 me-4 text-white">Hire Me</p>
          </div>
        </div>

        {/* Right side (desktop view) */}
        <div className="mobile:hidden sm:block col-span-2 text-right">
          <div className="grid gap-5 font-bold">
            {/* Star rating */}
            <div className="flex gap-2 justify-end">
              {[...Array(5)].map((_, index) => (
                <FaStar className="text-2xl text-orange-400" key={index} />
              ))}
            </div>
            {/* Experience details */}
            <div>
              <h4 className="text-4xl font-bold">01 Years</h4>
              <p className="text-1xl font-bold">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
