import { shoots } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const portfolioListContainer = document.querySelector('.portfolio-home-list');

  if (!portfolioListContainer) {
    return;
  }

  const featuredShootIds = ['tea', 'sand'];

  const featuredShoots = shoots.filter(shoot =>
    featuredShootIds.includes(shoot.id)
  );

  featuredShoots.forEach((shoot, index) => {
    const listItem = document.createElement('li');

    const itemClass =
      index === 0 ? 'portfolio-home-item-one' : 'portfolio-home-item-two';
    listItem.classList.add(itemClass);

    listItem.innerHTML = `
      <a href="shoot.html?id=${shoot.id}" class="portfolio-home-btn">
        <p class="portfolio-home-title-btn">${shoot.title}</p>
        <p class="portfolio-home-text-btn">View details</p>
      </a>
    `;

    portfolioListContainer.appendChild(listItem);
  });
});
