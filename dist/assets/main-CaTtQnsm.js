import{r as s}from"./utils-B7I03TpH.js";import{P as i}from"./ProductData-Dx0C3TkS.js";class c{constructor(a,e,r){this.category=a,this.product={},this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){s(n,this.listElement,a)}}function n(t){return`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`}const o=document.querySelector(".product-list"),d=new i("tents"),l=new c("tents",d,o);l.init();
