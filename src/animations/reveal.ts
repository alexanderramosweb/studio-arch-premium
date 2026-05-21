import { gsap } from "./gsap";
import SplitType from "split-type";

export function initRevealAnimations() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  revealElements.forEach((element) => {
    gsap.from(element, {
      y: 48,

      opacity: 0,

      filter: "blur(10px)",

      duration: 1.4,

      ease: "power4.out",

      scrollTrigger: {
        trigger: element,

        start: "top 92%",

        once: true,
      },
    });
  });
}

export function initHeroAnimation() {
  gsap.from("body", {
    opacity: 0,

    duration: 1,

    ease: "power2.out",
  });

  const heroContent = document.querySelector(".hero__content--animated");

  if (!heroContent) return;

  const elements = heroContent.children;

  gsap.from(elements, {
    y: 40,

    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    stagger: 0.18,
  });
}

export function initRevealGroups() {
  const revealGroups = document.querySelectorAll("[data-reveal-group]");

  revealGroups.forEach((group) => {
    const elements = group.children;

    gsap.from(elements, {
      y: 40,

      opacity: 0,

      duration: 1.2,

      ease: "power3.out",

      stagger: 0.15,

      scrollTrigger: {
        trigger: group,

        start: "top 85%",

        once: true,
      },
    });
  });
}

export function initParallax() {
  const heroImage = document.querySelector(".hero__background img");

  if (!heroImage) return;

  gsap.to(heroImage, {
    y: 90,

    scale: 1.08,

    ease: "none",

    scrollTrigger: {
      trigger: ".hero",

      start: "top top",

      end: "bottom top",

      scrub: true,
    },
  });
}

export function initSplitText() {
  const titles = document.querySelectorAll(".split-reveal");

  titles.forEach((title) => {
    const split = new SplitType(title as HTMLElement, {
      types: "lines",
    });

    gsap.from(split.lines, {
      yPercent: 120,

      opacity: 0,

      duration: 1.2,

      stagger: 0.12,

      ease: "power4.out",

      scrollTrigger: {
        trigger: title,

        start: "top 88%",

        once: true,
      },
    });
  });
}

export function initImageParallax() {
  const images = document.querySelectorAll(
    ".immersion__media img, .testimonial__media img, .project-story__media img, .project-gallery__item img",
  );

  images.forEach((image) => {
    gsap.to(image, {
      y: 40,

      ease: "none",

      scrollTrigger: {
        trigger: image,

        start: "top bottom",

        end: "bottom top",

        scrub: true,
      },
    });
  });
}
