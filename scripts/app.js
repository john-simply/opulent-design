const toggleMainNavigation = () => {
  // elements to animate
  const navigationButton = document.querySelector('.hamburger__button');

  if (navigationButton.classList.contains('active')) {
    navigationButton.classList.remove('active');
    setTimeout(() => {
      document.querySelector('body').style.overflowY = 'scroll';
    }, 1000);

    menuTimeline.reverse();

    // navigationMenu.style.transform = 'translateX(100%)';
  } else {
    document.querySelector('body').style.overflowY = 'hidden';
    navigationButton.classList.add('active');
    // navigationMenu.style.transform = 'translateX(0%)';
    menuTimeline.play();
  }
};

// START OF CHANGING LIFT FUNCTIONS
let currentIndex = 1;

function changeLift(isNext) {
  const liftText = document.querySelector(
    '.main-content .lift-wrapper__buttons .text-wrapper p'
  );
  const liftImage = document.querySelector(
    '.main-content .lift-wrapper__image-wrapper img'
  );

  const liftLabels = [
    {
      label: 'Deep Ocean',
    },
    {
      label: 'Signature Cabin',
    },
    {
      label: 'Hot Lava',
    },
    {
      label: 'Breaking Earth',
    },

    {
      label: 'Arctic Warfare',
    },
  ];

  changeIndexing(isNext);

  // landing content changes
  if (liftText) {
    liftText.innerHTML = `Cabin - ${
      liftLabels[currentIndex - 1].label
    } <span>0${currentIndex} / 0${liftLabels.length}</span>`;

    setTimeout(() => {
      liftImage.src = `./images/lifts/product-image-${currentIndex}.png`;
    }, 800);
  }

  if (isNext) {
    liftImage.style.transform = 'translateY(-120%)';
    setTimeout(() => {
      liftImage.style.transform = 'translateY(0%)';
    }, 900);
  } else {
    liftImage.style.transform = 'translateY(120%)';
    setTimeout(() => {
      liftImage.style.transform = 'translateY(0%)';
    }, 900);
  }

  // splide changes
  const label = document.querySelector('.lift-label');
  carbonSplide.go(currentIndex - 1);
  label.innerHTML = liftLabels[currentIndex - 1].label;

  // disables button to prevent spam when changing slides...
  document.querySelectorAll('.splide__arrow').forEach((e) => {
    setTimeout(() => {
      e.disabled = false;
    }, 3000);

    e.disabled = true;

    if (!!document.querySelector('#next__lift')) {
      const element = document.querySelector('#next__lift');

      element.disabled = true;
      setTimeout(() => {
        element.disabled = false;
      }, 1300);
    }

    if (!!document.querySelector('#previous__lift')) {
      const element = document.querySelector('#previous__lift');

      element.disabled = true;
      setTimeout(() => {
        element.disabled = false;
      }, 1300);
    }
  });
}

function changeIndexing(isNext) {
  if (isNext) {
    currentIndex++;
  } else {
    currentIndex--;
  }

  if (isNext && currentIndex === 6) {
    currentIndex = 1;
  } else if (!isNext && currentIndex === 0) {
    currentIndex = 5;
  }
}
// ENDING CHANGING OF LIFT FUNCTIONS

// CHECK IF CARBON SPLIDE IS IN DOM BEFORE REGISTERING
if (!!document.querySelector('.carbon__splide')) {
  carbonSplide = new Splide('.carbon__splide', {
    type: 'loop',
    pagination: false,
    drag: false,
    keyboard: false,
    perPage: 3,
    focus: 'center',
    breakpoints: {
      1024: {
        perPage: 1,
      },
    },
  });

  carbonSplide.mount();
}

// NEEDS REVERSING?
gsap.to('.main-header', {
  backgroundColor: '#272727',
  ease: 'ease',
  scrollTrigger: {
    trigger: 'html',
    start: 'top+=100 top',
    end: 'bottom bottom',
    // scrub: true,
  },
});

// MEGA MENU FOR PROJECTS
const imageContainer = document.querySelector('.mega-menu__image-wrapper');
const megaImage = document.querySelector('.mega-menu__image');
const crossFade = document.querySelector('.cross-fade-image');

if (imageContainer) {
  document.querySelector('.Residential').addEventListener('mouseover', () => {
    imageContainer.href = '/residential';

    const currentSrc = megaImage.src;
    crossFade.src = currentSrc;

    megaImage.style.opacity = 0;
    setTimeout(() => {
      megaImage.src = './images/heros/residential.webp';
      megaImage.style.opacity = 1;
    }, 300);
  });

  document.querySelector('.Marine').addEventListener('mouseover', () => {
    imageContainer.href = '/marine';

    const currentSrc = megaImage.src;
    crossFade.src = currentSrc;

    megaImage.style.opacity = 0;
    setTimeout(() => {
      megaImage.src = './images/heros/marine.webp';
      megaImage.style.opacity = 1;
    }, 300);
  });

  document.querySelector('.Hospitality').addEventListener('mouseover', () => {
    imageContainer.href = '/hospitality';

    const currentSrc = megaImage.src;
    crossFade.src = currentSrc;

    megaImage.style.opacity = 0;
    setTimeout(() => {
      megaImage.src = './images/heros/hospitality.webp';
      megaImage.style.opacity = 1;
    }, 300);
  });

  document.querySelector('.Automotive').addEventListener('mouseover', () => {
    imageContainer.href = '/automotive';

    const currentSrc = megaImage.src;
    crossFade.src = currentSrc;

    megaImage.style.opacity = 0;
    setTimeout(() => {
      megaImage.src = './images/heros/automotive.webp';
      megaImage.style.opacity = 1;
    }, 300);
  });

  document.querySelector('#projects-item').addEventListener('mouseover', () => {
    const dropdown = document.querySelector('.mega-menu');

    dropdown.classList.add('visible');
    dropdown.style.opacity = 1;

    dropdown.addEventListener('mouseleave', () => {
      dropdown.style.opacity = 0;
      setTimeout(() => {
        dropdown.classList.remove('visible');
      }, 100);
    });

    const items = document.querySelectorAll('.main-navigation__list li a');

    items.forEach((item) => {
      if (!item.id) {
        item.addEventListener('mouseover', () => {
          dropdown.classList.remove('visible');
        });
      }
    });
  });
}

// SPLIDE FEATURE BLOCK - NEEDS UPDATING
if (!!document.querySelector('.main__feature__block__splide')) {
  new Splide('.main__feature__block__splide', {
    perPage: 1,
    arrows: true,
    type: 'fade',
    pagination: false,
  }).mount();
}

function toggleSuppliers() {
  const element = document.querySelector('.homepage-suppliers-splide');

  element.classList.toggle('transform-hidden');
}

if (!!document.querySelector('.homepage-suppliers-splide')) {
  new Splide('.homepage-suppliers-splide', {
    perPage: 1,
    arrows: true,
    type: 'fade',
    pagination: false,
  }).mount();
}
