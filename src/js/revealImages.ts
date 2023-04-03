import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function revealImages(selector = ".js-image-to-reveal") {
  const elements: HTMLImageElement[] = Array.from(
    document.querySelectorAll(selector)
  );

  elements.forEach((element) => {
    const block = element.closest(".service-block");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "top center",
        markers: false,
      },
    });

    tl.to(element, {
      scaleY: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0,
    });
  });
}
