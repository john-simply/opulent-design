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

    liftImage.src = `./images/lifts/product-image-${currentIndex}.png`;
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
