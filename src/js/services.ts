import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function services(selector: string = ".js-services") {
  const elements: HTMLElement[] = Array.from(
    document.querySelectorAll(selector)
  );

  elements.forEach((element) => {
    const bgImage = element.querySelector(".services__bg-image");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(bgImage, {
      maskSize: "auto 1500%",
      duration: 1,
    });
  });
}

export default services;
