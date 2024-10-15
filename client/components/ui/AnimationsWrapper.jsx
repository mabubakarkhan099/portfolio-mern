"use client";
import { HeroAnimations, HireSectionAnimations, navbarAnimations } from "@/lib/useGsapAnimations";
import { useEffect } from "react";

const ClientAnimationWrapper = ({ children }) => {
  useEffect(() => {
    navbarAnimations();
    // HeroAnimations();
    HireSectionAnimations();
  }, []);

  return <>{children}</>;
};

export default ClientAnimationWrapper;
