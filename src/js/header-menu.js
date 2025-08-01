document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо вашу кнопку-бургер за її класом .header-menu
  const menuToggle = document.querySelector('.header-menu');

  // Знаходимо інші елементи, як і раніше
  const closeBtn = document.querySelector('.close-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  // Функція для відкриття меню
  const openMenu = () => {
    mobileNav.classList.add('is-open');
    // Блокуємо прокрутку сторінки, коли меню відкрите
    document.body.style.overflow = 'hidden';
  };

  // Функція для закриття меню
  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    // Повертаємо прокрутку
    document.body.style.overflow = '';
  };

  // Обробники подій
  if (menuToggle && mobileNav && closeBtn) {
    menuToggle.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
  }
});
