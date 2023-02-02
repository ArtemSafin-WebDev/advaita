import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "./plugins/scrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function smoothScrolling() {
  ScrollSmoother.create({
    smooth: 0.6, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
  });
}
