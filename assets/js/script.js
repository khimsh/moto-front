'use strict';

function playVideo(video) {
  video['play']();
}

function pauseVideo(video) {
  video['pause']();
}

// scroll to top
const scrollToTopButton = document.querySelector('[data-scroll-top]');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sliders
const featuredImage = new Swiper('.featured-image', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
});

const imageSwiper = new Swiper('.images', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

featuredImage.controller.control = imageSwiper;
imageSwiper.controller.control = featuredImage;

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
