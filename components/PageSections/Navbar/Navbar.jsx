"use client";
import React, { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { FaBars } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mobile:px-3 container mt-3">
        <nav className="bg-black mobile:rounded-2xl lg:rounded-full p-2">
          <div className="mx-auto flex items-center justify-between">
            {/* Left links */}
            <div className="hidden text-xl lg:block nav-item active">
              <a href="#" className="nav-link">
                Home
              </a>
            </div>
            <div className="hidden text-xl lg:block nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </div>
            <div className="hidden text-xl lg:block nav-item">
              <a href="#" className="nav-link">
                Service
              </a>
            </div>

            {/* Logo / Brand */}
            <div className="text-orange-400 text-2xl mobile:cursor-pointer sm:cursor-default">
              <div className="mobile:hidden lg:block">
                <Image src="/ak_logo.png" width={50} height={20} />
              </div>
              <div className="mobile:block lg:hidden">
                <Image src="/khanlogo.png" width={110} height={20} />
              </div>
            </div>

            {/* Right links */}
            <div className="hidden text-xl lg:block nav-item">
              <a href="#" className="nav-link">
                Resume
              </a>
            </div>
            <div className="hidden text-xl lg:block nav-item">
              <a href="#" className="nav-link">
                Projects
              </a>
            </div>
            <div className="hidden text-xl lg:block nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>

            <div className="navbar-toggler mobile:block lg:hidden">
              <Button className="bg-transparent hover:bg-transparent active:bg-transparent" onClick={() => setIsOpen(!isOpen)}>
                {isOpen === false? <FaBars /> : <FaBarsStaggered /> }
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="text-sm nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </div>
              <div className="text-sm nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </div>
              <div className="text-sm nav-item">
                <a href="#" className="nav-link">
                  Service
                </a>
              </div>
              <div className="text-sm nav-item">
                <a href="#" className="nav-link">
                  Resume
                </a>
              </div>
              <div className="text-sm nav-item">
                <a href="#" className="nav-link">
                  Projects
                </a>
              </div>
              <div className="text-sm nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
