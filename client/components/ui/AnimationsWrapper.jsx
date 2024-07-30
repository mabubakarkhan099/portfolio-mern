'use client';
import { animateInfoHeading, navbarAnimation } from '@/lib/useGsapAnimations';
import { useEffect } from 'react';


const ClientAnimationWrapper = ({ children }) => {
  useEffect(() => {
    animateInfoHeading();
    navbarAnimation()
  }, []);

  return <>{children}</>;
};

export default ClientAnimationWrapper;
