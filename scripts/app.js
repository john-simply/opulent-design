const imageContainer = document.querySelector('.mega-menu__image-wrapper');
const megaImage = document.querySelector('.mega-menu__image');
const crossFade = document.querySelector('.cross-fade-image');

let currentIndex = 1;

function toggleMainNavigation() {
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
    menuTimeline.play();
  }
}

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

function toggleSuppliers() {
  const element = document.querySelector('.homepage-suppliers-splide');

  element.classList.toggle('transform-hidden');
}

// ---------- THE BELOW CODE NEEDS TO BE REPLACED WHEN CHANGING NEWS & EVENTS ----------
function filter(filter) {
  const title = document.querySelector('#latest__news__title');
  document.querySelector('#load__more').classList.remove('hidden');

  switch (filter) {
    case 'Event':
      title.textContent = 'Latest Events';
      break;
    case 'News':
      title.textContent = 'Latest News';
      break;
    default:
      title.textContent = 'Latest News & Events';
      break;
  }

  const loadMore = document.querySelector('#load__more');
  loadMore.style.display = 'none';

  const allEvents = document.querySelectorAll('.application__item');

  for (let i = 0; i < allEvents.length; i++) {
    const item = allEvents[i];

    if (!item.classList.contains(filter)) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }

    if (filter === 'all' && i < 2) {
      loadMore.style.display = 'block';
      item.classList.remove('hidden');
    }
  }
}

function loadMore(filter) {
  const allEvents = document.querySelectorAll('.application__item.hidden');

  if (allEvents.length <= 1) {
    document.querySelector('#load__more').style.display = 'none';
  }

  for (let i = 0; i < allEvents.length; i++) {
    const item = allEvents[i];

    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
    }

    if (i > 0) {
      break;
    }
  }
}
// ---------- THE ABOVE CODE NEEDS TO BE REPLACED WHEN CHANGING NEWS & EVENTS ----------

if (!!document.querySelector('.homepage-suppliers-splide')) {
  new Splide('.homepage-suppliers-splide', {
    perPage: 1,
    arrows: true,
    type: 'fade',
    pagination: false,
    rewind: true,
  }).mount();
}

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
