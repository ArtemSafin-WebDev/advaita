import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionPathPlugin from "./plugins/MotionPathPlugin.js";
import DrawSVGPlugin from "./plugins/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

export default function plane() {
  const elements: HTMLElement[] = Array.from(
    document.querySelectorAll(".service-block__plane")
  );

  elements.forEach((element) => {
    const path = element.querySelector<SVGPathElement>(".motion-path");

    const planeIcon = document.querySelector(".service-block__plane-icon");

    gsap.set(planeIcon, {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.closest(".service-block"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(planeIcon, {
      motionPath: {
        path,
        autoRotate: true,
        align: path,
      },
      duration: 15,
      ease: "none",
    });
  });
}
