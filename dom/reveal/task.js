"use strict";

let a = [...document.querySelectorAll(".reveal")].forEach((element) => {
  document.addEventListener("scroll", () => {
    if (
      element.getBoundingClientRect().top > 0 &&
      element.getBoundingClientRect().bottom < window.innerHeight
    ) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
});
