import"./assets/main-VHzxEShR.js";import{s as l}from"./assets/data-ft7-xUXK.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".portfolio-home-list");if(!e)return;const i=["tea","sand"];l.filter(t=>i.includes(t.id)).forEach((t,s)=>{const o=document.createElement("li"),n=s===0?"portfolio-home-item-one":"portfolio-home-item-two";o.classList.add(n),o.innerHTML=`
      <a href="shoot.html?id=${t.id}" class="portfolio-home-btn">
        <p class="portfolio-home-title-btn">${t.title}</p>
        <p class="portfolio-home-text-btn">View details</p>
      </a>
    `,e.appendChild(o)})});
//# sourceMappingURL=index.js.map
