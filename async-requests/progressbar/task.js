"use strict";

const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.onloadstart = () => (progress.value = 0.3);
  xhr.upload.onprogress = () => (progress.value = 0.3);
  xhr.upload.onload = () => (progress.value = 1);
  xhr.upload.onerror = () => (progress.value = 0);
  xhr.send(formData);
});
