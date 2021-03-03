"use strict";

let rotators = [...document.querySelectorAll(".rotator")];

rotators.forEach((rotator) => {
  let rotatorCases = [...rotator.querySelectorAll(".rotator__case")];
  let indRotatorCase = 0;
  let rotatorCase = rotatorCases[indRotatorCase];

  let timerID = setTimeout(function myTimer() {
    rotatorCases.forEach((rotatorCase) =>
      rotatorCase.classList.remove("rotator__case_active")
    );
    rotatorCase.classList.add("rotator__case_active");
    rotatorCase.style.color = rotatorCases[indRotatorCase].getAttribute(
      "data-color"
    );
    if (indRotatorCase < rotatorCases.length - 1) {
      indRotatorCase++;
    } else {
      indRotatorCase = 0;
    }
    rotatorCase = rotatorCases[indRotatorCase];
    timerID = setTimeout(myTimer, +rotatorCase.getAttribute("data-speed"));
  }, +rotatorCase.getAttribute("data-speed"));
});
