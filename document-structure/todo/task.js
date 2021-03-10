"use strict";

let tasksList = document.getElementById("tasks__list");

if (sessionStorage.tasksList) {
  tasksList.innerHTML = sessionStorage.tasksList;
}

let button = document.getElementById("tasks__add");
let inputPlace = document.getElementById("task__input");
let removes = document.querySelectorAll(".task__remove");
console.log(removes);

[...removes].forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.closest(".task"));
    el.closest(".task").remove();
    sessionStorage.tasksList = tasksList.outerHTML;
  });
});

button.addEventListener("click", (event) => {
  if (inputPlace.value) {
    let newTask = document.createElement("div");
    newTask.innerHTML = `<div class="task">
    <div class="task__title">
      ${inputPlace.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
    tasksList.appendChild(newTask);
    newTask.querySelector(".task__remove").addEventListener("click", () => {
      newTask.remove();
    });
    sessionStorage.tasksList = tasksList.outerHTML;
  }
  event.preventDefault();
  sessionStorage.tasksList = tasksList.outerHTML;
  inputPlace.value = "";
});
