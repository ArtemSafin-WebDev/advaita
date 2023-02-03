import "virtual:svg-icons-register";
import partnersSlider from "./partnersSlider";
import select from "./select";
import "@lottiefiles/lottie-player";
import "../css/style.css";
import intro from "./intro";
import reveal from "./reveal";
import officesSlider from "./officesSlider";
import productsSlider from "./productsSlider";
import areasSlider from "./areasSlider";
import menu from "./menu";
import contactForm from "./contactForm";
import areas from "./areas";
import productsShowMore from "./productsShowMore";
import smoothScrolling from "./smoothScrolling";
import brokerage from "./brokerage";
import services from "./services";
import equilizer from "./equilizer";
import plane from "./plane";
import productModal from "./productModal";
import setScrollbarWidth from "./setScrollbarWidth";

document.addEventListener("DOMContentLoaded", () => {
  setScrollbarWidth();
  partnersSlider();
  select();
  intro();
  reveal();
  officesSlider();
  productsSlider();
  areasSlider();
  menu();
  contactForm();
  areas();
  productsShowMore();
  smoothScrolling();
  brokerage();
  services();
  equilizer();
  plane();
  productModal();
});
