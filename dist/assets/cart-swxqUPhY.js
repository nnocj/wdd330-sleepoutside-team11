import{l as e,g as t}from"./utils-Diqr6REO.js";e();function s(){const r=(t("so-cart")||[]).map(c=>o(c));document.querySelector(".product-list").innerHTML=r.join("")}function o(a){return productImage=a.Images?a.Images.PrimaryMedium:a.Image,`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${productImage}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`}s();
