import Image from "next/image";
import "./HireMeSection.scss";
import { Button } from "@/components/ui/button";
import SkillsSection from "./SkillsSection";

function HireMeSection() {
  return (
    <section className="bg-slate-100 mobile:rounded-none sm:rounded-3xl" id="hire-me-section">
      <div className="container py-14">
        <div className="grid mobile:grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="personal-image sm:col-span-2">
            <SkillsSection />
          </div>
          <div className="personal-info sm:col-span-2">
            <div className="grid mobile:gap-5 sm:gap-5">
              <h1 className="mobile:text-5xl sm:text-6xl fw-bold relative">
                <span id="headingWhy">Why</span>{" "}
                <span className="text-orange-400" id="headingHireMe">
                  Hire Me?
                </span>
              </h1>
              <div className="mobile:w-full sm:w-3/4 text-gray-500 text-xl">
                <p style={{ position: "relative" }} id="hireDescription">
                  Front End Web Developer with over 1 year of experience specializing in creating and implementing responsive, efficient user interfaces. Highly skilled in leveraging Next.js and related frameworks to build visually engaging, user-centric websites. A strong ability to collaborate
                  effectively with cross-functional teams, ensuring the delivery of high-quality web solutions that enhance user experience and achieve key business objectives.
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="grid gap-2">
                  <h5 className="text-4xl fw-bold project-completed ">
                    <span>0</span> +
                  </h5>
                  <p className="text-2xl text-gray-500">Projects Completed</p>
                </div>
                {/* <div className="grid gap-2">
                                <h5 className="text-4xl fw-bold">450+</h5>
                                <p className="text-2xl text-gray-500">Projects Completed</p>    
                            </div> */}
              </div>
              {/* <div>
                <Button variant="outline" className="bg-transparent outline outline-2 outline-black text-xl fw-bold py-10 px-16 rounded-2xl hover:bg-orange-400" id="hire-me-button">
                  Hire Me
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HireMeSection;
