'use strict'

let timer = document.getElementById('timer') 
let time = new Date();
time = time.setHours(0,0,2,0);
let counter = (new Date(time).getHours()*3600) + (new Date(time).getMinutes()*60) + (new Date(time).getSeconds());
let timerId = setInterval(() => {
    if (counter > 0) {
    counter = counter - 1;
    time = time - 1000;
    timer.textContent = `${new Date(time).getHours()}:${new Date(time).getMinutes()}:${new Date(time).getSeconds()}`} else { 
      alert('Вы победили в конкурсе!');
      clearInterval(timerId);
  }
  }, 1000);
