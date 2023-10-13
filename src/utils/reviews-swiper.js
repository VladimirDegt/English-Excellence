const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    1280: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
  loop: false,
});
