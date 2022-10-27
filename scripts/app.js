const toggleMainNavigation = () => {
  const navigationButton = document.querySelector('.hamburger__button');
  const navigationMenu = document.querySelector('.main-navigation');

  if (navigationButton.classList.contains('active')) {
    navigationButton.classList.remove('active');
    // Close Navigation

    setTimeout(() => {
      document.querySelector('html').style.overflowY = 'scroll';
    }, 1000);

    navigationMenu.style.transform = 'translateX(100%)';
  } else {
    document.querySelector('html').style.overflowY = 'hidden';
    navigationButton.classList.add('active');

    navigationMenu.style.transform = 'translateX(0%)';
  }
};
