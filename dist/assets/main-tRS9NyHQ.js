import{r as i,l as n}from"./utils-Diqr6REO.js";import{P as o}from"./ProductData-DxRgxSyt.js";class l{constructor(a,e,r){this.category=a,this.product={},this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){i(d,this.listElement,a)}}function d(t){return t.Image?`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`:`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img src="${t.Images}" alt="Image of ${t.NameWithoutBrand}">
                <h2 class="card__brand">${t.Brand.Name}</h2>
                <h3 class="card__name">${t.NameWithoutBrand}</h3>
                <p class="product-card__price">$${t.FinalPrice}</p>
                </a>
            </li>`}function h(t){if(t.ok)return t.json();throw new Error("Bad Response")}class m{constructor(){this.path="../json/category.json"}getData(){return fetch(this.path).then(h).then(a=>a)}async findProductById(a){return(await this.getData()).find(r=>r.Id===a)}}class u{constructor(a,e,r){this.category=a,this.product={},this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){i(g,this.listElement,a)}}function g(t){const a=t.Name.toLowerCase();return`<li class="category-nav-item">
                <a href="#" class="${a}">${a}
                    <img src="${t.Image}" alt="Image of ${t.Name}" width="50">
                </a>
            </li>`}n();const s=document.querySelector(".product-list"),c=document.querySelector(".category-list"),p=new m("category"),y=new u("category",p,c);y.init();c.addEventListener("click",t=>{s.innerHTML="";const a=t.target.closest("a");if(!a)return;t.preventDefault();const e=a.textContent.trim().toLowerCase(),r=new o(e);new l(e,r,s).init()});
