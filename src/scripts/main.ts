import {
  initRevealAnimations,
  initHeroAnimation,
  initRevealGroups,
  initParallax,
  initSplitText,
  initImageParallax,
} from "../animations/reveal";

import { initLenis } from "../animations/lenis";

initHeroAnimation();

initRevealAnimations();

initRevealGroups();

initLenis();

initParallax();
initSplitText();
initImageParallax();

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});
