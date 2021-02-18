"use strict";

if (localStorage.removeItem("loader")) {
  document.getElementById("loader").innerHTML = localStorage.removeItem(
    "loader"
  );
}

fetch("https://netology-slow-rest.herokuapp.com")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("loader").className = "loader";
    for (let i in data.response.Valute) {
      document.getElementById(
        "items"
      ).innerHTML += `<div class="item"> <div class="item__code">
    ${data.response.Valute[i].CharCode}
    </div> <div class="item__value">
    ${data.response.Valute[i].Value}
    </div>
    <div class="item__currency">
    руб.
    </div></div>`;
    }
    localStorage.setItem("loader", document.getElementById("loader"));
    console.log(window.localStorage);
  });
