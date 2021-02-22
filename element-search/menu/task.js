"use strict";

let arrClass = document.querySelectorAll(".menu__link");
let arrClass2 = [...arrClass]
  .filter((i) => i.closest(".menu").classList.contains("menu_main"))
  .map((i) => {
    i.onclick = () => {
      if (
        i
          .closest(".menu__item")
          .querySelector(".menu")
          .classList.contains("menu_active")
      ) {
        i.closest(".menu__item")
          .querySelector(".menu")
          .classList.remove("menu_active");
      } else {
        for (let j of document.querySelectorAll(".menu_active")) {
          j.classList.remove("menu_active");
        }
        i.closest(".menu__item")
          .querySelector(".menu")
          .classList.add("menu_active");
      }

      if (i.closest(".menu__item").querySelector(".menu")) {
        return false;
      }
    };
  });
