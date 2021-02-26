'use strict'

let buttons = [...document.querySelectorAll('.dropdown__value')];
let itemLinks = document.querySelectorAll('.dropdown__link')


buttons.forEach(i => {
  i.addEventListener('click', () => {
    i.nextElementSibling.classList.add('dropdown__list_active');
  });
});


itemLinks.forEach(i => {
  i.onclick = () => {
    let activeElement = document.querySelector('.dropdown__list_active');
    activeElement.previousElementSibling.innerHTML = i.innerHTML;
    activeElement.classList.remove('dropdown__list_active');
    return false;
  };
})
