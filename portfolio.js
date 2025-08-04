import"./assets/main-VHzxEShR.js";import{s as c}from"./assets/data-BI-xCbn2.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("works-container"),r=document.getElementById("load-more-btn");if(!i||!r){console.error("Необхідні елементи (works-container або load-more-btn) не знайдені.");return}const d=6;let n=0;function s(e){const t=document.createElement("a");t.href=`shoot.html?id=${e.id}`,t.classList.add("work-card");const a=e.mainImageTablet?e.mainImageTablet.path:e.mainImageMobile.path,m=e.mainImageDesktop?e.mainImageDesktop.path:a;return t.innerHTML=`
      <picture>
        <source media="(min-width: 1440px)" srcset="${m}">
        <source media="(min-width: 768px)" srcset="${a}">
        <img src="${e.mainImageMobile.path}" alt="${e.title}" loading="lazy">
      </picture>
      <div class="card-text">
          <h3>${e.title}</h3>
          <span>View details</span>
      </div>
    `,t}function o(){const e=c.slice(n,n+d);e.forEach(t=>{const a=s(t);i.appendChild(a)}),n+=e.length,n>=c.length&&(r.style.display="none")}r.addEventListener("click",o),o()});
//# sourceMappingURL=portfolio.js.map
