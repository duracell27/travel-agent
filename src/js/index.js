// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
import { easepick } from '@easepick/bundle';

import autoComplete from "@tarekraafat/autocomplete.js";

const autoCompleteJS = new autoComplete({
    selector: "#autoComplete",
    placeHolder: "e.g Bali, Indonesia",
    data: {
        src: ["USA", "Ukraine", "Slovakia"]
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
  });