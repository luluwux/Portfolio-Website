import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll(".animation");

    elements.forEach((element) => {
      gsap.to(element, {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top center",

        },
      });
    });
  }, []);
}
