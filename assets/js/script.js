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

// Video Gallery
if (document.querySelectorAll('[data-video-src]')) {
  const videoSources = document.querySelectorAll('[data-video-src]');
  const videoGallery = document.querySelector('[data-video-gallery]');
  const videoTag = videoGallery.querySelector('[data-video]');
  const playVideoBtn = videoGallery.querySelector('[data-play-btn]');

  videoSources.forEach((videoSource) => {
    videoSource.addEventListener('click', () => {
      videoTag.src = `${videoSource.dataset.videoSrc}`;
    });
  });

  playVideoBtn.addEventListener('click', () => {
    playVideo(videoTag);
    playVideoBtn.classList.add('fade');
  });

  videoTag.addEventListener('click', () => {
    if (!videoTag.paused) {
      pauseVideo(videoTag);
      playVideoBtn.classList.remove('fade');
    }
  });

  // videoTag.addEventListener('dblclick', function (e) {
  //   videoTag.requestFullscreen();
  // });
}
