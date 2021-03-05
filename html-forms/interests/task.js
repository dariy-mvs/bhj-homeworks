"use strict";

document.querySelector(".interests").addEventListener("change", (event) => {
  let target = event.target;
  if (target.tagName !== "INPUT") return;
  else {
    let checkList = target.parentElement.nextElementSibling;
    if (checkList) {
      if (!target.checked) {
        [...checkList.querySelectorAll(".interest__check")].forEach(
          (el) => (el.checked = false)
        );
        target.checked = false;
      } else {
        [...checkList.querySelectorAll(".interest__check")].forEach(
          (el) => (el.checked = true)
        );
        target.checked = true;
      }
    }
    let parent = target.closest(".interests").closest(".interests");
    let parentCheckbox = target
      .closest(".interests")
      .closest(".interest")
      .querySelector(".interest__check");
    console.log(
      [...parent.querySelectorAll(".interest__check")].every((el) => {
        return el.checked === true;
      })
    );
    if (
      [...parent.querySelectorAll(".interest__check")].every((el) => {
        return el.checked === true;
      })
    ) {
      parentCheckbox.indeterminate = false;
      parentCheckbox.checked = true;
    } else if (
      [...parent.querySelectorAll(".interest__check")].some((el) => {
        return el.checked === true;
      })
    ) {
      parentCheckbox.indeterminate = true;
    } else {
      parentCheckbox.checked = false;
      parentCheckbox.indeterminate = false;
    }
  }
});
