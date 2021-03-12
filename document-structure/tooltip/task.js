"use strict";

let tooltips = document.querySelectorAll(".has-tooltip");
[...tooltips].forEach((el) => {
  el.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target.classList)
    let tooltip = document.querySelector('.tooltip');
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.classList = "tooltip";
      target.insertAdjacentElement("afterend", tooltip);
    }
    if (!target.classList.contains("tooltip_active")) {
      [...document.querySelectorAll('.tooltip_active')].forEach(el => el.classList.remove('tooltip_active'));
      tooltip.textContent = target.title;
      let coords = target.getBoundingClientRect();
      tooltip.style.left = coords.left + "px";
      let top = coords.top + target.offsetHeight + 5 + pageYOffset;
      tooltip.style.top = top + "px";
      tooltip.classList.add('tooltip_active');
      target.classList.add("tooltip_active");
    } else {
      target.classList.remove("tooltip_active");
      tooltip.classList.remove("tooltip_active");
    }
    event.preventDefault();
  });
});
