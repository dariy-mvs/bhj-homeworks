"use strict";

let rightButton = document.querySelector(".slider__arrow_next");
let leftButton = document.querySelector(".slider__arrow_prev");

rightButton.onclick = () => {
  let activeItem = document.querySelector(".slider__item_active");
  activeItem.classList.remove("slider__item_active");
  if (activeItem.closest(".slider__items").lastElementChild === activeItem) {
    activeItem
      .closest(".slider__items")
      .firstElementChild.classList.add("slider__item_active");
  } else {
    activeItem.nextElementSibling.classList.add("slider__item_active");
  }
};

leftButton.onclick = () => {
  let activeItem = document.querySelector(".slider__item_active");
  activeItem.classList.remove("slider__item_active");
  if (activeItem.closest(".slider__items").firstElementChild === activeItem) {
    activeItem
      .closest(".slider__items")
      .lastElementChild.classList.add("slider__item_active");
  } else {
    activeItem.previousElementSibling.classList.add("slider__item_active");
  }
};

let sliderDotColl = document.querySelectorAll(".slider__dot");
let imageColl = document.querySelectorAll(".slider__image");

for (let i = 0; i < sliderDotColl.length; i++) {
  sliderDotColl[i].onclick = () => {
    let activeItem = document.querySelector(".slider__item_active");
    activeItem.classList.remove("slider__item_active");
    imageColl[i].closest(".slider__item").classList.add("slider__item_active");
  };
}
