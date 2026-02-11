import{r as e}from"./utils-__e39gHV.js";class n{constructor(a,r,s){this.category=a,this.product={},this.dataSource=r,this.listElement=s}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){e(i,this.listElement,a)}}function i(t){return`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`}export{n as P};
