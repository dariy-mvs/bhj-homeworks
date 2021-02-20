'use strict'

function getHole(index) {
  return document.getElementById(`hole${index}`)
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = () => {
    if ([...getHole(i).classList].includes('hole_has-mole')) {
      dead.textContent = +dead.textContent + 1;
    } else {
      lost.textContent = +lost.textContent + 1;
    };
    if (dead.textContent === '10') {
      alert('Вы выиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    } else if (lost.textContent === '5') {
      alert('Вы проиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}