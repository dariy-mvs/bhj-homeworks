"use strict";

let cart = document.getElementsByClassName("cart__products")[0];

if (sessionStorage.cart) {
  cart.innerHTML = sessionStorage.cart;
}

function showCart() {
  if (!document.querySelector(".cart__product")) {
    document.querySelector(".cart").style.display = "none";
  } else {
    document.querySelector(".cart").style.display = "block";
  }
}

showCart();

let counters = document.getElementsByClassName("product__quantity-controls");

function showCounters() {
  [...counters].forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.target;
      let counterValue = el.querySelector(".product__quantity-value");
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
    });
  });
}
showCounters();

let addButtons = document.querySelectorAll(".product__add");
[...addButtons].forEach((el) => {
  let thisProduct = el.closest(".product");
  let thisId = thisProduct.dataset.id;
  let newCartProduct;
  el.addEventListener("click", () => {
    let findId = [...cart.querySelectorAll(".cart__product")].find(
      (el) => el.dataset.id === thisId
    );
    if (findId) {
      findId.querySelector(".cart__product-count").textContent =
        +findId.querySelector(".cart__product-count").textContent +
        +thisProduct.querySelector(".product__quantity-value").textContent;
      newCartProduct = findId;
    } else {
      let cartProduct = document.createElement("div");
      cartProduct.classList.add("cart__product");
      cartProduct.dataset.id = thisProduct.dataset.id;
      cartProduct.insertAdjacentElement(
        "afterbegin",
        thisProduct.querySelector(".product__image").cloneNode(true)
      );
      cartProduct.querySelector(".product__image").className =
        "cart__product-image";
      let cartCount = document.createElement("div");
      cartCount.className = "cart__product-count";
      cartCount.textContent = thisProduct.querySelector(
        ".product__quantity-value"
      ).textContent;
      cartProduct.appendChild(cartCount);
      let cartProductQuanity = document.createElement("div");
      cartProductQuanity.className = "cart_product_quantity";
      cartProductQuanity.innerHTML = `<div class="product__quantity-title">
      Удалить количество
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
  <div class="cart_product__add">
     Удалить
  </div>`;
      cartProductQuanity.querySelector(
        ".cart_product__add"
      ).style = `background: green;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;`;
      cartProductQuanity
        .querySelector(".cart_product__add")
        .addEventListener("click", () => {
          let deleteCount = +cartProductQuanity.querySelector(
            ".product__quantity-value"
          ).textContent;
          if (+cartCount.textContent < deleteCount)
            alert("У Вас нет столько продуктов");
          else {
            cartCount.textContent = +cartCount.textContent - deleteCount;
          }
          if (+cartCount.textContent === 0) {
            cartProduct.remove();
          }
        });
      cartProduct.appendChild(cartProductQuanity);
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
    showCounters();
    sessionStorage.cart = cart.outerHTML;
  });
});
