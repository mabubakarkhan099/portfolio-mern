"use client";
import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.scss'; // Import the SCSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible,checkScrollTop]);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
      aria-label="Scroll to top"
    >
      <span className="sr-only">Scroll to top</span>
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7-7-7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;