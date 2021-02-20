'use strict'

let cookie = document.getElementById('cookie');
document.querySelector('.clicker__status').innerHTML += `<div class="clicker__status">
Средняя скорость клика: <span id="middle_clicker__counter">0</span> </div>`;
let timer = new Date();
let counter = document.getElementById('clicker__counter');
cookie.onclick = () => {
  let timer2 = new Date();
  let speed = (1 / ((timer2 - timer) / 1000)).toFixed(2);
  timer = timer2;
  cookie.setAttribute('width', '220px');
  cookie.setAttribute('height', '147px');
  let elemSpeed = document.getElementById('middle_clicker__counter');
  elemSpeed.textContent = speed; 
  counter.textContent = +counter.textContent + 1;
  setTimeout(() => {
  cookie.setAttribute('width', '200px');
  cookie.setAttribute('height', '127px');
  }, 100);
}