const mobileMenuModule = (() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const enableMobileMenu = () => {
    mobileMenu.classList.add('visible');
  };
  const disableMobileMenu = () => {
    mobileMenu.classList.remove('visible');
  };
  return { enableMobileMenu, disableMobileMenu };
})();
const addEventListenerHamburger = () => {
  const hamburgerOpenBtn = document.querySelector('.hamburger-open');
  const hamburgerCloseBtn = document.querySelector('.hamburger-close');
  hamburgerOpenBtn.addEventListener('click', mobileMenuModule.enableMobileMenu);
  hamburgerCloseBtn.addEventListener(
    'click',
    mobileMenuModule.disableMobileMenu
  );
};

addEventListenerHamburger();
