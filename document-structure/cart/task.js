"use strict";

let cart = document.getElementsByClassName("cart__products")[0];
if (sessionStorage.cart) {
  JSON.parse(sessionStorage.cart).forEach((el) => {
    let id = el.id;
    let img = el.img;
    let count = el.count;
    cart.innerHTML += stringHtml(id, img, count);
  });
} else {
  sessionStorage.setItem("cart", "[]");
}

function addSessionValue(id, img, count) {
  let arrToJson = JSON.parse(sessionStorage.cart);
  let cartId = arrToJson.find((el) => el.id === id);
  if (cartId) {
    arrToJson = arrToJson.map((el) => {
      if (el.id === id) {
        el.count = +el.count + +count;
      }
      return el;
    });
  } else arrToJson.push({ id: id, img: img, count: count });
  arrToJson = JSON.stringify(arrToJson);
  sessionStorage.cart = arrToJson;
}

function deleteSessionValue(id, count) {
  let arrToJson = JSON.parse(sessionStorage.cart);
  let findElem = arrToJson.find((el) => el.id === id);
  let findIndElem = arrToJson.findIndex((el) => el.id === id);
  if (+findElem.count > count) {
    findElem.count = +findElem.count - count;
  } else {
    arrToJson.splice(findIndElem, 1);
  }
  arrToJson = JSON.stringify(arrToJson);
  sessionStorage.cart = arrToJson;
}

function showCart() {
  if (!document.querySelector(".cart__product")) {
    document.querySelector(".cart").style.display = "none";
  } else {
    document.querySelector(".cart").style.display = "block";
  }
}

function stringHtml(id, img, count) {
  return `<div class="cart__product" data-id="${id}" style="margin: 10px">
  <img class="cart__product-image" src="${img}">
  <div class="cart__product-count">${count}</div>
  <div class="product__quantity-title">
      удалить товары
      </div>
      <div class="product__quantity-controls">
      <div class="product__quantity-control product__quantity-control_dec">
          -
      </div>
      <div class="product__quantity-value">
          1
      </div>
      <div class="product__quantity-control product__quantity-control_inc">
          +
      </div>
      </div>
     <div class="cart_product__add" style ="background: green;
     padding: 10px 20px;
     margin: 5px;
     color: #fff;
     border-radius: 5px;
     cursor: pointer;">
     Удалить
      </div>
  </div>`;
}

function addEventRemove(elem) {
  let cartCount = elem.querySelector(".cart__product-count");
  let deleteCount = +elem.querySelector(".product__quantity-value").textContent;
  let thisId = elem.dataset.id;
  deleteSessionValue(thisId, deleteCount);
  if (+cartCount.textContent < deleteCount) cartCount.textContent = 0;
  else {
    cartCount.textContent = +cartCount.textContent - deleteCount;
  }
  if (+cartCount.textContent === 0) {
    elem.remove();
  }
}
showCart();

[...document.querySelectorAll(".cart__product")].forEach((el) => {
  el.addEventListener("click", () => addEventRemove(el));
});

let counters = document.getElementsByClassName("product__quantity-controls");

function showCounters(elem) {
  elem.addEventListener("click", (event) => {
    let target = event.target;
    let counterValue = elem.querySelector(".product__quantity-value");
    if (!target.classList.contains("product__quantity-control")) return;
    else {
      if (target.classList.contains("product__quantity-control_dec")) {
        if (+counterValue.textContent > 1) {
          counterValue.textContent = +counterValue.textContent - 1;
        }
      } else if (target.classList.contains("product__quantity-control_inc")) {
        counterValue.textContent = +counterValue.textContent + 1;
      }
    }
    event.stopPropagation();
  });
}

[...counters].forEach((el) => showCounters(el));

let addButtons = document.querySelectorAll(".product__add");
[...addButtons].forEach((el) => {
  let thisProduct = el.closest(".product");
  let thisId = thisProduct.dataset.id;
  let thisImg = thisProduct.querySelector("img").src;
  let thisCount;
  let newCartProduct;
  el.addEventListener("click", () => {
    thisCount = thisProduct.querySelector(".product__quantity-value")
      .textContent;
    let findId = [...cart.querySelectorAll(".cart__product")].find(
      (el) => el.dataset.id === thisId
    );
    if (findId) {
      findId.querySelector(".cart__product-count").textContent =
        +findId.querySelector(".cart__product-count").textContent + +thisCount;
      newCartProduct = findId;
    } else {
      let cartProduct = document.createElement("div");
      cartProduct.innerHTML = stringHtml(thisId, thisImg, thisCount);
      cartProduct
        .querySelector(".cart_product__add")
        .addEventListener("click", () =>
          addEventRemove(cartProduct.querySelector(".cart__product"))
        );
      showCounters(cartProduct.querySelector(".product__quantity-controls"));
      newCartProduct = cart.appendChild(cartProduct);
    }

    showCart();

    let img = thisProduct.querySelector(".product__image").cloneNode(true);
    img.style.position = "absolute";
    img.style.opacity = "0.6";
    document.body.appendChild(img);
    let imgTop = thisProduct.getBoundingClientRect().top + "px";
    let imgLeft = thisProduct.getBoundingClientRect().left + "px";
    let timer = setInterval(() => {
      if (parseInt(imgTop) > +newCartProduct.getBoundingClientRect().top) {
        imgTop =
          parseInt(imgTop) -
          (parseInt(imgTop) - newCartProduct.getBoundingClientRect().top) / 5 +
          "px";
        imgLeft =
          parseInt(imgLeft) +
          (newCartProduct.getBoundingClientRect().left - parseInt(imgLeft)) /
            5 +
          "px";
        img.style.top = imgTop;
        img.style.left = imgLeft;
      } else {
        clearInterval(timer);
        img.remove();
      }
    }, 20);
    addSessionValue(thisId, thisImg, thisCount);
  });
});
