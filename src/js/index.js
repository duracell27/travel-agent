import mobileNav from './modules/mobile-nav.js';
mobileNav();
import { easepick } from "@easepick/bundle";
import autoComplete from "@tarekraafat/autocomplete.js";
import Swiper from "swiper/bundle";
import ScrollReveal from "scrollreveal";
import "swiper/css/bundle";

const autoCompleteJS = new autoComplete({
  selector: "#autoComplete",
  placeHolder: "e.g Bali, Indonesia",
  data: {
    src: ["USA", "Ukraine", "Slovakia"],
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

const picker = new easepick.create({
  element: document.getElementById("datepicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 32,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#slider_next",
    prevEl: "#slider_prev",
  },
});

// swiper();

ScrollReveal({
  distance: "40px",
  duration: 2000,
});

ScrollReveal().reveal(".header, .partners, .popular__title", {
  origin: "top"
});

ScrollReveal().reveal(".discover__picture-hint, .discover__title", {
  origin: "left"
});

ScrollReveal().reveal(".discover__picture-scroll, .discover__title, .popular__controls", {
  origin: "right"
});

ScrollReveal().reveal(".discover__form, .discover__picture-img", {
  origin: "bottom"
});
