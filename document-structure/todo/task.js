"use strict";

let tasksList = document.getElementById("tasks__list");

if (sessionStorage.tasks) {
  JSON.parse(sessionStorage.tasks).forEach(el => {
    tasksList.innerHTML += stringHtml(el)
  });
} else {
  sessionStorage.setItem('tasks', '[]');
}


let button = document.getElementById("tasks__add");
let inputPlace = document.getElementById("task__input");
let removes = document.querySelectorAll(".task__remove");

function addSessionValue(inputValue) {
  let arrToJson = JSON.parse(sessionStorage.tasks);
  arrToJson.push(inputValue);
  arrToJson = JSON.stringify(arrToJson);
  sessionStorage.tasks = arrToJson;
};

function removeSessionValue(removeElem) {
  let arrToJson = JSON.parse(sessionStorage.tasks);
  let ind = arrToJson.findIndex(el => {
    removeElem.closest(".task").querySelector('.task__title').textContent === el
  });
  arrToJson.splice(ind,1);
  arrToJson = JSON.stringify(arrToJson);
  sessionStorage.tasks = arrToJson;
}

function stringHtml(value) {
  return `<div class="task">
  <div class="task__title">
    ${value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`
}

let removeItem = (event) => {
  let target = event.target
  target.closest(".task").remove();
  removeSessionValue(target);
}

[...removes].forEach((el) => {
  el.addEventListener("click", removeItem);
});

button.addEventListener("click", (event) => {
  if (inputPlace.value) {
    let newTask = document.createElement("div");
    newTask.innerHTML = stringHtml(inputPlace.value);
    addSessionValue(inputPlace.value);
    tasksList.appendChild(newTask);
    newTask.querySelector(".task__remove").addEventListener("click", removeItem);
  }
  event.preventDefault();
  inputPlace.value = "";
});
