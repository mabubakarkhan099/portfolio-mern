import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


//Navbar Animations -------------------------------------------------------------------------------------
export const navbarAnimations = () => {
  var tl = gsap.timeline();
  tl.fromTo("nav", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
  tl.fromTo(".nav-item", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 });
};

//Hero Section Animations --------------------------------------------------------------------------------
export const HeroAnimations = () => {
  const tl = gsap.timeline()
  const imHeading = document.querySelector(".hero-section .im-heading")
  const khanHeading = document.querySelector(".hero-section .khan-heading")
  const comaHeading = document.querySelector(".hero-section .coma-heading")
  const webdevHeading = document.querySelector(".hero-section .webdev-heading")
  
  gsap.fromTo("#heroHelloButton", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
  // gsap.fromTo("#heroHeading h1", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.4, delay: 0.6 });

  const headingAnimation = (textToSplitted) => {
    if (textToSplitted) {
      // Get the text content and split it into letters
      const text = textToSplitted.innerText;
      const splittedText = text.split("");

      // Wrap each letter in a span and update the inner HTML
      textToSplitted.innerHTML = splittedText.map((letter) => `<span class='heading-letter' style="display: inline-block; position: relative;">${letter === " " ? "&nbsp;" : letter}</span>`).join("");

      // Apply GSAP animation to each letter
      gsap.fromTo(
        ".heading-letter",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          
        }
      );
    }
  };
  headingAnimation(imHeading)
  headingAnimation(khanHeading)
  headingAnimation(comaHeading)
  headingAnimation(webdevHeading)
  
};

//Hire Section Animations --------------------------------------------------------------------------------
export const HireSectionAnimations = () => {
  const counter = document.querySelector(".project-completed span");
  const headingWhy = document.getElementById("headingWhy");
  const headingHireMe = document.getElementById("headingHireMe");
  const hireDescription = document.getElementById("hireDescription");
  const tl = gsap.timeline();

  //skill section animation---
  gsap.fromTo(
    ".skills-section .skill",
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.2,
      // ease: "power3.out",
      scrollTrigger: {
        trigger: "#hire-me-section",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: true, // Smoothly animate with scrolling
      },
    }
  );

  //Splitted Text Animation
  const headingAnimation = (textToSplitted) => {
    if (textToSplitted) {
      // Get the text content and split it into letters
      const text = textToSplitted.innerText;
      const splittedText = text.split("");

      // Wrap each letter in a span and update the inner HTML
      textToSplitted.innerHTML = splittedText.map((letter) => `<span class='heading-letter' style="display: inline-block; position: relative;">${letter === " " ? "&nbsp;" : letter}</span>`).join("");

      // Apply GSAP animation to each letter
      gsap.fromTo(
        ".heading-letter",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#hire-me-section",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "top 50%",
            scrub: 1, // Smoothly animate with scrolling
          },
        }
      );
    }
  };
  headingAnimation(headingWhy);
  headingAnimation(headingHireMe);

  //Description Animation

  tl.fromTo(
    hireDescription,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#hire-me-section",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: true, // Smoothly animate with scrolling
      },
    }
  );

  tl.fromTo(
    counter,
    { innerText: 0 },
    {
      duration: 1, // Duration of the animation in seconds
      innerText: 10, // Final value of the counter
      ease: "power1.out", // Easing function for a smooth animation
      snap: { innerText: 1 }, // Snap the values to integers
      onUpdate: function () {
        counter.innerText = Math.floor(counter.innerText);
      },
      scrollTrigger: {
        trigger: "#hire-me-section",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 20%",
        scrub: true, // Smoothly animate with scrolling
      },
    }
  );
};
