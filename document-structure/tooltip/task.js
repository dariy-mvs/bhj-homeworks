"use strict";

let tooltips = document.querySelectorAll(".has-tooltip");
[...tooltips].forEach((el) => {
  el.addEventListener("click", (event) => {
    let target = event.target;
    let tooltip;
    if (target.tagName !== "A") return;
    if (!target.classList.contains("tooltip_active")) {
      [...document.querySelectorAll(".tooltip_active")].forEach((elt) => {
        elt.classList.remove("tooltip_active");
        if (elt.tagName === "DIV") elt.remove();
      });

      tooltip = document.createElement("div");
      tooltip.classList = "tooltip tooltip_active";
      tooltip.textContent = target.title;
      let coords = target.getBoundingClientRect();
      tooltip.style.left = coords.left + "px";
      let top = coords.top + target.offsetHeight + 5 + pageYOffset;
      tooltip.style.top = top + "px";
      tooltip.style.position = "absolute";
      console.log(coords);
      target.insertAdjacentElement("afterend", tooltip);
      target.classList.add("tooltip_active");
    } else {
      tooltip.remove();
      target.classList.remove("tooltip_active");
    }
    event.preventDefault();
  });
});
