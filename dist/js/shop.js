(()=>{"use strict";const e=async()=>{const e=await fetch("https://marchodb-f079f-default-rtdb.firebaseio.com/goods.json");return await e.json()},t=async({display:t,stack:n,selectorWrap:r,sordetData:i,paginatedData:s})=>{const c=document.querySelector(r);let o;const a=e=>{c.innerHTML="",e.forEach((e=>{c.insertAdjacentHTML("beforeend",`\n            <div class="product-item">\n                <div class="product-item__id">${e.id}</div>\n                    <div class="product-item__img-box">\n                    ${e.discount?`<div class="product-item__discount">${e.discount}</div>`:""}\n                    <img class="product-item__images" src="${Array.isArray(e.images)?e.images[0]:e.images}" alt="product">\n                        <div class="product-item__link-box">    \n                            <a class="product-item__link product-link" href="product.html">\n                                <svg width="19px" height="20px">\n                                    <path fill-rule="evenodd" fill="rgb(41, 40, 45)" d="M18.709,18.219 L14.028,13.269 C15.231,11.813 15.891,9.982 15.891,8.075 C15.891,3.622 12.328,-0.002 7.947,-0.002 C3.568,-0.002 0.005,3.622 0.005,8.075 C0.005,12.529 3.568,16.153 7.947,16.153 C9.591,16.153 11.160,15.649 12.498,14.690 L17.216,19.680 C17.414,19.890 17.678,20.004 17.964,20.004 C18.232,20.004 18.486,19.899 18.680,19.710 C19.093,19.307 19.105,18.639 18.709,18.219 L18.709,18.219 ZM7.947,2.106 C11.185,2.106 13.819,4.785 13.819,8.075 C13.819,11.367 11.185,14.046 7.947,14.046 C4.711,14.046 2.078,11.367 2.078,8.075 C2.078,4.785 4.711,2.106 7.947,2.106 L7.947,2.106 Z"></path>\n                                </svg>\n                            </a>\n                            <a class="product-item__link basket-link" href="#">\n                                <svg width="16px" height="20px">\n                                    <path fill-rule="evenodd" fill="rgb(41, 40, 45)" d="M15.999,17.294 L14.854,4.396 C14.830,4.109 14.589,3.892 14.307,3.892 L11.953,3.892 C11.920,1.740 10.163,0.002 8.005,0.002 C5.847,0.002 4.090,1.740 4.057,3.892 L1.703,3.892 C1.417,3.892 1.180,4.109 1.156,4.396 L0.011,17.294 C0.011,17.311 0.007,17.327 0.007,17.343 C0.007,18.812 1.352,20.006 3.007,20.006 L13.003,20.006 C14.658,20.006 16.003,18.812 16.003,17.343 C16.003,17.327 16.003,17.311 15.999,17.294 L15.999,17.294 ZM8.005,1.106 C9.554,1.106 10.817,2.350 10.849,3.892 L5.161,3.892 C5.193,2.350 6.456,1.106 8.005,1.106 L8.005,1.106 ZM13.003,18.902 L3.007,18.902 C1.969,18.902 1.127,18.215 1.111,17.368 L2.206,5.001 L4.053,5.001 L4.053,6.678 C4.053,6.985 4.298,7.230 4.605,7.230 C4.911,7.230 5.157,6.985 5.157,6.678 L5.157,5.001 L10.849,5.001 L10.849,6.678 C10.849,6.985 11.095,7.230 11.401,7.230 C11.708,7.230 11.953,6.985 11.953,6.678 L11.953,5.001 L13.800,5.001 L14.899,17.368 C14.883,18.215 14.037,18.902 13.003,18.902 L13.003,18.902 Z"></path>\n                                </svg>\n                            </a>\n                        </div>\n                    </div>\n                    <div class="product-item__wrapper-box">\n                        <div class="product-item__box">\n                            <div class="product-item__category">${e.category}</div>\n                            <h4 class="product-item__title">${e.name}</h4>\n                            <div class="product-item__price">\n                                <div class="product-item__new-price">${e.price?e.price.trim()+" тг":"unkown"}</div>\n                                <div class="product-item__old-price">${e.priceOld?e.priceOld.trim()+" тг":"unkown"}</div>\n                            </div>\n                        </div>\n                        <div class="product-item__content-box">\n                            <a class="product-item__btn" href="product.html">Добавить в карзину</a>\n                        </div>\n                    </div>\n                    </div>`)}))};s&&a(s),i&&a(i.slice(0,n));try{if(o=await e(),!o)throw new Error("Данные не получены");"main"!==t&&"shop"!==t||a(o.slice(0,n))}catch(e){console.log(e)}},n=()=>{document.querySelectorAll(".product-item").forEach((e=>e.classList.toggle("product-item--list")))},r=e=>{const t=document.querySelector(".button-grid"),r=document.querySelector(".button-list"),i=()=>{t.classList.toggle("shop-content__filter-btn--active"),r.classList.toggle("shop-content__filter-btn--active"),n()},s=(e,n)=>{t.disabled=e,r.disabled=n};e?(t.classList.add("shop-content__filter-btn--active"),r.classList.remove("shop-content__filter-btn--active"),s(!0,!1)):(t.addEventListener("click",(()=>{i(),s(!0,!1)})),r.addEventListener("click",(()=>{i(),s(!1,!0)})))};t({display:"shop",stack:10,selectorWrap:".shop-content__inner"}),r(),(async()=>{try{const r=document.querySelector(".pagination"),i=await e(),s=Math.ceil(i.length/10);let c=1,o=10;const a=()=>{document.querySelector(".button-list").classList.contains("shop-content__filter-btn--active")&&n()},l=e=>{const t=document.querySelectorAll(".pagination__link");t.forEach((e=>e.classList.remove("pagination__link--active"))),t[e-1].classList.add("pagination__link--active")},d=(e,n,r)=>{const i=n*--r,s=i+n,c=e.slice(i,s);t({selectorWrap:".shop-content__inner",paginatedData:c}),a()},_=()=>{const e=document.querySelector(".pagination__list");for(let t=1;t<=s;t++)e.insertAdjacentHTML("beforeend",`\n                    <li class="pagination__item">\n                        <a class="pagination__link" href="#">${t}</a>\n                    </li>`),1===t&&document.querySelector(".pagination__link").classList.add("pagination__link--active")};r.addEventListener("click",(e=>{e.preventDefault();const t=e.target;t.classList.contains("pagination__link")&&(d(i,o,t.textContent),c=t.textContent,l(t.textContent)),t.classList.contains("pagination__next")&&c<s&&(d(i,o,++c),l(c)),t.classList.contains("pagination__prev")&&c>1&&(d(i,o,--c),l(c))})),_(i)}catch(e){console.log(e.message)}})(),(async()=>{try{const n=await e(),i=document.querySelector(".filter"),s=document.querySelector(".shop__filter-btn");let c=n;const o=()=>{const e=document.querySelector(".filter-search__form");document.querySelector(".filter-search__btn").disabled=!0,e.addEventListener("input",(e=>{c=n.filter((t=>{const n=t.name.toLowerCase().includes(e.target.value.toLowerCase()),r=t.category.toLowerCase().includes(e.target.value.toLowerCase());return n||r||void 0})),e.target.value?(r(!0),t({selectorWrap:".shop-content__inner",sordetData:c})):(c=n,t({selectorWrap:".shop-content__inner",stack:10,sordetData:c}))}))},a=()=>{const e=document.querySelector(".filter-price__form"),i=e.querySelector("#min"),s=e.querySelector("#max"),o=e.querySelector(".filter-price__from"),a=e.querySelector(".filter-price__to");let l,d;const _=e=>e.toLocaleString("ru"),p=e=>e.replace(/\s+/g,"");e.addEventListener("input",(e=>{e.preventDefault(),"min"===e.target.id?(l=p(e.target.value),o.textContent=_(+l)):"max"===e.target.id&&(d=p(e.target.value),a.textContent=_(+d)),i.value||s.value||(c=n,t({selectorWrap:".shop-content__inner",stack:10,sordetData:c})),r(!0),o.textContent||(o.textContent=0),a.textContent||(a.textContent=0)})),e.addEventListener("submit",(e=>{e.preventDefault(),c=c.filter((e=>{if(+p(e.price)>=l&&+p(e.price)<=d)return e})),c[0]||(c=n),r(!0),t({selectorWrap:".shop-content__inner",stack:10,sordetData:c})}))};s.addEventListener("click",(()=>{i.style.display?i.style.display="":i.style.display="block"}));const l=(e,i,s,o,a)=>{const l=document.getElementById(e);let d=[];l.addEventListener("change",(e=>{const l=e.target.closest(o).querySelector(i),_=l.parentNode.querySelector(s).textContent.trim();l.checked?n.forEach((e=>{e[a]===_&&d.push(e)})):d.forEach(((e,t)=>{e[a]==_&&delete d[t]})),r(!0),t({selectorWrap:".shop-content__inner",sordetData:d}),0===document.querySelector(".shop-content__inner").childElementCount&&t({selectorWrap:".shop-content__inner",stack:10,sordetData:c})}))};o(),a(),l("filter-size",".filter-size__input",".filter-size__text",".filter-size__label","size"),l("filter-category",".filter-category__input",".filter-category__checkbox",".filter-category__label","category"),l("filter-gender",".filter-popular__input",".filter-popular__checkbox",".filter-popular__label","gender")}catch(e){console.log(e.message)}})(),(async()=>{try{const t=await e(),n=new Set,r=new Set,i=new Set;t.forEach((e=>{e.size&&n.add(e.size),e.category&&r.add(e.category),e.gender&&i.add(e.gender)}));const s=(e,t,n)=>{const r=document.getElementById(e);t.forEach((t=>{n>0&&("filter-size"===e&&r.insertAdjacentHTML("beforeend",`\n                        <label class="filter-size__label">\n                            <input class="filter-size__input" type="checkbox">\n                            <span class="filter-size__checkbox"></span>\n                            <span class="filter-size__text">${t}</span>\n                        </label>`),"filter-category"===e&&r.insertAdjacentHTML("beforeend",`\n                        <label class="filter-category__label">\n                            <input class="filter-category__input" type="checkbox">\n                            <div class="filter-category__checkbox">\n                                <span>${t}</span>\n                            </div>\n                        </label>`),"filter-gender"===e&&r.insertAdjacentHTML("beforeend",`\n                        <label class="filter-popular__label">\n                            <input class="filter-popular__input" type="checkbox">\n                            <span class="filter-popular__checkbox">\n                                ${t}\n                            </span>\n                        </label> `),n--)}))};s("filter-size",n,10),s("filter-category",r,10),s("filter-gender",i,10)}catch(e){console.log(e.message)}})(),document.querySelector(".shop-content__inner").addEventListener("click",(e=>{if(e.target.closest(".product-link")||e.target.closest(".product-item__btn")){const t=e.target.closest(".product-item").querySelector(".product-item__id").textContent;sessionStorage.setItem("idProduct",t)}})),(e=>{const t=document.querySelector(".shop-content__inner"),n=document.querySelector(".cart"),r=document.querySelector(".user-nav__num"),i=document.querySelector(".basket-sidebar"),s=document.querySelector(".basket-sidebar__inner"),c=JSON.parse(localStorage.getItem("goods"))||[],o=()=>localStorage.setItem("goods",JSON.stringify(c)),a=()=>r.textContent=c.length,l=()=>{s.innerHTML="",c.forEach((e=>{s.insertAdjacentHTML("beforeend",`\n            <article class="basket-sidebar__item">\n                <img class="basket-sidebar__image" src="${e.image}">\n                <h3 class="basket-sidebar__title">${e.title}</h3>\n                <p class="basket-sidebar__price">${e.price}</p>\n                <p class="basket-sidebar__id" style="display: none">${e.id}</p>\n                <button type="button" class="basket-sidebar__btn button-look">Смотреть</button>\n                <button type="button" class="basket-sidebar__btn button-reomve">Удалить</button>\n            </article>\n            `)}))},d=()=>{i.classList.toggle("basket-sidebar--active"),s.classList.toggle("basket-sidebar__inner--active")};t&&t.addEventListener("click",(e=>{e.target.closest(".basket-link")&&(e=>{const t={id:e.querySelector(".product-item__id").textContent,title:e.querySelector(".product-item__title").textContent,image:e.querySelector(".product-item__images").getAttribute("src"),price:e.querySelector(".product-item__new-price").textContent,category:e.querySelector(".product-item__category").textContent};(e=>{c.forEach(((t,n)=>{t.id==e.id&&c.splice(n,1)}))})(t),c.push(t),o(),l(),a()})(e.target.closest(".product-item"))})),n.addEventListener("click",(e=>{e.preventDefault(),c.length>0&&d()})),s.addEventListener("click",(e=>{if(e.target.classList.contains("button-reomve"))t=e.target.closest(".basket-sidebar__item").querySelector(".basket-sidebar__id").textContent,c.forEach(((e,n)=>{e.id==t&&c.splice(n,1)})),o(),l(),a(),0===c.length&&d();else if(e.target.classList.contains("button-look")){const t=e.target.closest(".basket-sidebar__item").querySelector(".basket-sidebar__id").textContent;sessionStorage.setItem("idProduct",t),window.location.href="/product.html"}var t})),c.length>0&&l(),a()})()})();