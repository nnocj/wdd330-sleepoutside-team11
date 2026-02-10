import{r as s,l as i}from"./utils-__e39gHV.js";import{P as c}from"./ProductData-Dx0C3TkS.js";class n{constructor(a,e,r){this.category=a,this.product={},this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){s(o,this.listElement,a)}}function o(t){return`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`}i();const d=document.querySelector(".product-list"),l=new c("tents"),m=new n("tents",l,d);m.init();
