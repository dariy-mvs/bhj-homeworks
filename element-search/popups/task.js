"use strict";

let modalPopap = document.getElementById("modal_main");
modalPopap.classList.add("modal_active");
let modalClose = [...document.querySelectorAll(".modal__close")];

modalClose.map((i) => {
  i.onclick = () => {
    for (let j of document.querySelectorAll(".modal_active")) {
      j.classList.remove("modal_active");
    }
  };
});

modalPopap.querySelector(".show-success").onclick = () => {
  modalPopap.classList.remove('modal_active');
  document.getElementById("modal_success").classList.toggle("modal_active");
};
