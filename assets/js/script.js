'use strict';

function playVideo(video) {
  video['play']();
}

function pauseVideo(video) {
  video['pause']();
}

// scroll to top
if (document.querySelector('[data-scroll-top]')) {
  const scrollToTopButton = document.querySelector('[data-scroll-top]');
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Sliders
// const featuredImage = new Swiper('.featured-image', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
// });

// const imageSwiper = new Swiper('.images', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 2,
//   breakpoints: {
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     // when window width is >= 992px
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// featuredImage.controller.control = imageSwiper;
// imageSwiper.controller.control = featuredImage;

// Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

// მობილური ნავიგაცია
const openNavBtn = document.querySelector('[data-nav-open]');
const closeNavBtn = document.querySelector('[data-nav-close]');
const nav = document.querySelector('[data-navigation]');

openNavBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

closeNavBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

// Dropdowns
if (document.querySelector('[data-trigger-included]')) {
  const includedBtn = document.querySelector('[data-trigger-included]');
  const includedTarget = document.querySelector('[data-target-included]');

  includedBtn.addEventListener('click', () => {
    includedTarget.classList.toggle('active');
    includedBtn.classList.toggle('rotate-arrow');
    includedBtn.classList.toggle('active');
  });
}

if (document.querySelector('[data-rent-dropdown]')) {
  const rentDropdowns = document.querySelectorAll('[data-rent-dropdown]');

  rentDropdowns.forEach((rentDropdown) => {
    const trigger = rentDropdown.querySelector('[data-trigger]');
    const target = rentDropdown.querySelector('[data-target]');

    trigger.addEventListener('click', () => {
      trigger.classList.toggle('active');
      target.classList.toggle('active');
    });
  });
}

// FAQS
if (document.querySelectorAll('[data-faq-trigger]')) {
  const faqTriggers = document.querySelectorAll('[data-faq-trigger]');

  faqTriggers.forEach((faqTrigger) => {
    faqTrigger.addEventListener('click', () => {
      const faqContent = faqTrigger.nextElementSibling;

      faqTrigger.classList.toggle('active');
      faqContent.classList.toggle('active');
    });
  });
}

// ვიდეო ბანერი
if (document.querySelector('[data-video-banner]')) {
  const videoBanner = document.querySelector('[data-video-banner]');
  const video = videoBanner.querySelector('[data-video]');
  const videoPlay = videoBanner.querySelector('[data-video-play]');
  const videoPause = videoBanner.querySelector('[data-video-pause]');

  videoPlay.addEventListener('click', () => {
    playVideo(video);
  });

  videoPause.addEventListener('click', () => {
    if (!video.paused) {
      pauseVideo(video);
    }
  });
}

// Video Gallery
if (document.querySelector('[data-video-src]')) {
  const videoSources = document.querySelectorAll('[data-video-src]');
  const videoGallery = document.querySelector('[data-video-gallery]');
  const videoTag = videoGallery.querySelector('[data-video]');

  videoSources.forEach((videoSource) => {
    videoSource.addEventListener('click', () => {
      videoTag.src = `${videoSource.dataset.videoSrc}`;
    });
  });
}

// ვიდეო ქარდები
if (document.querySelector('[data-video-card]')) {
  const videoCards = document.querySelectorAll('[data-video-card]');

  videoCards.forEach((videoCard) => {
    const video = videoCard.querySelector('[data-video]');
    const playBtn = videoCard.querySelector('[data-video-play]');

    playBtn.addEventListener('click', () => {
      playVideo(video);
      playBtn.classList.add('fade');
    });

    video.addEventListener('click', () => {
      if (!video.paused) {
        pauseVideo(video);
        playBtn.classList.remove('fade');
      }
    });
  });
}

// Schedule More Info
if (document.querySelector('[data-more-info]')) {
  const infoContainers = document.querySelectorAll('[data-more-info]');

  infoContainers.forEach((infoContainer) => {
    const showInfo = infoContainer.querySelector('[data-show-info]');
    const infoBox = infoContainer.querySelector('[data-info]');
    const hideInfo = infoContainer.querySelector('[data-close-info]');

    showInfo.addEventListener('click', () => {
      infoBox.classList.add('shown');
    });

    hideInfo.addEventListener('click', () => {
      infoBox.classList.remove('shown');
    });
  });
}

// Booking
if (document.querySelector('[data-booking]')) {
  const bookingModal = document.querySelector('[data-booking]');
  const openBookingModals = document.querySelectorAll('[data-open-booking]');
  const closeBookingModal = document.querySelector('[data-close-booking]');

  const formPageOne = document.querySelector('[data-form-one]');
  const formPageTwo = document.querySelector('[data-form-two]');
  const formPageNext = document.querySelector('[data-form-next]');

  openBookingModals.forEach((openBookingModal) => {
    openBookingModal.addEventListener('click', () => {
      bookingModal.classList.add('active');
    });
  });

  closeBookingModal.addEventListener('click', () => {
    bookingModal.classList.remove('active');
    formPageOne.classList.add('shown');
    formPageTwo.classList.remove('shown');
  });

  // Booking - ფორმის მეორე გვერდზე გადასვლა
  formPageNext.addEventListener('click', (e) => {
    e.preventDefault();

    formPageOne.classList.toggle('shown');
    formPageTwo.classList.toggle('shown');
  });
}

// Range Input
if (document.querySelector('[data-range]')) {
  const ranges = document.querySelectorAll('[data-range]');

  ranges.forEach((range) => {
    const inputRange = range.querySelector('[data-range-input]');
    const daysSelected = range.querySelector('[data-range-output]');

    inputRange.addEventListener('change', () => {
      daysSelected.innerHTML = inputRange.value;
    });
  });
}
