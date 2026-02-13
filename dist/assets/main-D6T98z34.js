import{r as o,l as c}from"./utils-Diqr6REO.js";import{P as n}from"./ProductData-njUseP_z.js";class l{constructor(e,a){this.category=e.category,this.product={},this.dataSource=e,this.listElement=a}renderList(e){o(d,this.listElement,e)}async init(){const e=await this.dataSource.getData();this.renderList(e),console.log("category:",this.category),console.log("List element:",this.listElement),console.log(" List:",e)}}function d(t){return t.Images?`<li class="product-card">
            <a href="product_pages/?product=${t.Id}&category=${this.category}">
              <img src="${t.Images.PrimaryMedium}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`:`<li class="product-card">
            <a href="product_pages/?product=${t.Id}&category=${this.category}">
              <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`}function h(t){if(t.ok)return t.json();throw new Error("Bad Response")}class m{constructor(){this.path="../json/category.json"}getData(){return fetch(this.path).then(h).then(e=>e)}async findProductById(e){return(await this.getData()).find(s=>s.Id===e)}}class g{constructor(e,a,s){this.category=e,this.product={},this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){o(u,this.listElement,e)}}function u(t){const e=t.Name.toLowerCase();return`<li class="category-nav-item">
                <a href="#" class="${e}">${e}
                    <img src="${t.Image}" alt="Image of ${t.Name}" width="50">
                </a>
            </li>`}c();const i=document.querySelector(".category-list"),y=new m("category"),p=new g("category",y,i);p.init();const r=document.querySelector(".product-list");i.addEventListener("click",t=>{r.innerHTML="";const e=t.target.closest("a");if(!e)return;t.preventDefault();const a=e.textContent.trim().toLowerCase(),s=new n(a);new l(s,r).init()});
