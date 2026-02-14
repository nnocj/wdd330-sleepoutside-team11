import"./style-HlQJNEhF.js";import{l as s,g as e}from"./utils-B3cLSmJT.js";s();function n(){const a=e("so-cart")||[],c=e("prices")||[],r=0;c.foreach(t=>{r+=t});const o=a.map(t=>l(t));document.querySelector(".product-list").innerHTML=o.join(""),document.querySelector("#totalPrice").textContent=`Total: $${r}`}function l(a){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Images?a.Images.PrimaryMedium:a.Image}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`}n();
