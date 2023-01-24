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

document.addEventListener("DOMContentLoaded", () => {
  partnersSlider();
  select();
  intro();
  reveal();
  officesSlider();
  productsSlider();
  areasSlider();
  menu();
});
