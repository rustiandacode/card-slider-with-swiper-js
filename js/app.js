let swiper = new Swiper('.slide-content', {
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grapCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
