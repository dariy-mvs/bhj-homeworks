"use strict";

const book = document.getElementById("book");

let controlColor = book.querySelector(".book__control_color");
let controlBackground = book.querySelector(".book__control_background");
let controlFont = book.querySelector(".book__control_font-size");

function changeClass(activeClass, spClassPart, generalClass) {
  let target = event.target;
  if (target.tagName !== "A") return;
  [...controlFont.children].forEach(
    (el) => el.classList.remove(activeClass)
  );
  [...book.classList]
    .map((el) => {
      let classPart = el.split("").splice(0, 10).join("");
      if (classPart === spClassPart) {
        return el;
      }
    })
    .forEach((el) => {
      book.classList.remove(el);
    });
  let thisClass = [...target.classList].filter((el) => {
    let thisClassPart = el.split("").splice(0, 4).join("");
    if (el !== generalClass && thisClassPart !== "text") {
      return el;
    }
  })[0];
  target.classList.add(activeClass);
  if (thisClass) {
    book.classList.add(thisClass);
  }
  event.preventDefault();
}

controlFont.addEventListener("click", (event) => {
  changeClass("font-size_active", "font-size_", "font-size");
});

controlColor.addEventListener("click", (event) => {
  changeClass("color_active", "book_color", "color");
});

controlBackground.addEventListener("click", (event) => {
  changeClass("color_active", "bg_color_", "color");
});
