"use strict";
// при загрузке страницы проверяем localStorage
if (localStorage.loader) {
  JSON.parse(localStorage.loader).forEach(el => {
    document.getElementById("loader").innerHTML += makeFromResponseHTML(el);
  });
   localStorage.setItem(
    "loader", '[]'
  );
} else {
  localStorage.setItem('loader', '[]');
}

// Функции

function makeFromResponseHTML(jsonObj) {
  return `<div class="item"> <div class="item__code">
  ${jsonObj.CharCode}
  </div> <div class="item__value">
  ${jsonObj.Value} 
  </div>
  <div class="item__currency">
  руб.
  </div></div>`
}

fetch("https://netology-slow-rest.herokuapp.com")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("loader").className = "loader";
    let arrToJson = [];
    function makeThisJson (thisVatute) {
      let elemArrToJson = {CharCode: thisVatute.CharCode, Value: thisVatute.Value};
      arrToJson.push(elemArrToJson);
    };
    for (let i in data.response.Valute) {
      let thisVatute = data.response.Valute[i];
      document.getElementById(
        "items"
      ).innerHTML += makeFromResponseHTML(thisVatute);
      makeThisJson(thisVatute);
    }
    arrToJson = JSON.stringify(arrToJson);
    localStorage.setItem("loader", arrToJson);
  });
