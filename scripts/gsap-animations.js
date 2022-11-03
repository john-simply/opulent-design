gsap.registerPlugin(ScrollTrigger);

const liftAnimation = (direction) => {
  const isScrollingDown = direction === 1;
  return gsap.to('.lift-wrapper__image-wrapper', {
    y: isScrollingDown ? '100vh' : '0vh',
    transformOrigin: 'top bottom',
    ease: 'power1',
  });
};

const arrowAnimation = (direction) => {
  const isScrollingDown = direction === 1;
  console.log('yes');
  return gsap.to('.main-content .lift-wrapper__buttons', {
    y: isScrollingDown ? '100vh' : '0vh',

    transformOrigin: 'top bottom',
    ease: 'none',
  });
};

const liftScrollInit = () => {
  ScrollTrigger.create({
    trigger: '.suppliers-block__content',
    start: 'top-=300 center',
    end: 'bottom bottom',

    onEnter: ({ direction }) => {
      liftAnimation(direction);

      // animate arrows depending on screen size
      if (window.screen.width >= 1024 && window.screen.width < 1440) {
        const arrows = document.querySelector(
          '.main-content .lift-wrapper__buttons'
        );
        // arrows.style.transform = 'rotate(-90deg) translate(-100vh, 0vh)';
        setTimeout(() => {
          arrows.style.transform = 'translateY(100vh)';
        }, 500);
      } else if (window.screen.width >= 1440) {
        const arrows = document.querySelector(
          '.main-content .lift-wrapper__buttons'
        );
        arrows.style.transform = 'rotate(-90deg) translate(-100vh, 0vh)';
      }
    },
    onLeaveBack: ({ direction }) => {
      liftAnimation(direction);

      // animate arrows depending on screen size
      if (window.screen.width >= 1024 && window.screen.width < 1440) {
        const arrows = document.querySelector(
          '.main-content .lift-wrapper__buttons'
        );
        // arrows.style.transform = 'rotate(-90deg) translate(-100vh, 0vh)';
        setTimeout(() => {
          arrows.style.transform = 'translateY(0vh)';
        }, 500);
      } else if (window.screen.width >= 1440) {
        const arrows = document.querySelector(
          '.main-content .lift-wrapper__buttons'
        );
        arrows.style.transform = 'rotate(-90deg) translate(0vh, 0vh)';
      }
    },
  });
};

const menuTimeline = gsap.timeline({ paused: true });
const navigationMenu = document.querySelector('.main-navigation');
const menuItems = document.querySelectorAll('.main-navigation__list li');

menuTimeline.to(navigationMenu, {
  x: 0,
});

menuTimeline.from(menuItems, {
  y: -50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power1',
});

window.addEventListener('load', () => {
  if (document.querySelector('.lift-wrapper')) {
    liftScrollInit();
  }
});
