"use strict";
let contant = document.querySelectorAll(".tab__content");

[...document.querySelectorAll(".tab")].forEach((element, ind) => {
  element.addEventListener("click", () => {
    let activeItem = document.querySelector(".tab_active");
    if (element.classList.contains("tab_active")) {
      element.classList.remove("tab_active");
      contant[ind].classList.remove("tab__content_active");
    } else {
      if (activeItem) {
        activeItem.classList.remove("tab_active");
        [...document.querySelectorAll(".tab__content_active")].forEach((el) => {
          el.classList.remove("tab__content_active");
        });
      }
      element.classList.add("tab_active");
      contant[ind].classList.add("tab__content_active");
    }
  });
});
