"use strict";

let arrClass = document.querySelectorAll(".menu__link");
[...arrClass]
  .filter((i) => i.closest(".menu").classList.contains("menu_main"))
  .forEach((i) => {
    i.onclick = () => {
      let thisMenu = i.closest(".menu__item").querySelector(".menu");
      if (thisMenu.classList.contains("menu_active")) {
        thisMenu.classList.remove("menu_active");
      } else {
        for (let j of document.querySelectorAll(".menu_active")) {
          j.classList.remove("menu_active");
        }
        thisMenu.classList.add("menu_active");
      }

      if (thisMenu) {
        return false;
      }
    };
  });
