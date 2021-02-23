"use strict";

let rightButton = document.querySelector(".slider__arrow_next");
let leftButton = document.querySelector(".slider__arrow_prev");
let sliderDotColl = [...document.querySelectorAll(".slider__dot")];
let imageColl = [...document.querySelectorAll(".slider__item")];

function clickImage(num) {
  imageColl[num].classList.add('slider__item_active')
};

rightButton.onclick = () => {
  let activeItem = document.querySelector(".slider__item_active");
  activeItem.classList.remove("slider__item_active");
  if (activeItem.closest(".slider__items").lastElementChild === activeItem) {
    clickImage(0);
  } else {
    let number = imageColl.indexOf(activeItem);
    clickImage(number + 1);
  }
};

leftButton.onclick = () => {
  let activeItem = document.querySelector(".slider__item_active");
  activeItem.classList.remove("slider__item_active");
  if (activeItem.closest(".slider__items").firstElementChild === activeItem) {
    clickImage(imageColl.length -1);
  } else {
    let number = imageColl.indexOf(activeItem);
    clickImage(number - 1);
  }
};

sliderDotColl.forEach((i, ind) => {
  i.onclick = () => {
    document.querySelector(".slider__item_active").classList.remove("slider__item_active");
    clickImage(ind)
  }
})

// for (let i = 0; i < sliderDotColl.length; i++) {
//   sliderDotColl[i].onclick = () => {
//     let activeItem = document.querySelector(".slider__item_active");
//     activeItem.classList.remove("slider__item_active");
//     imageColl[i].closest(".slider__item").classList.add("slider__item_active");
//   };
// }
