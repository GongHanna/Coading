const mainSwiper = new Swiper(".main-swiper", {
  speed: 600,
  loop: true,
  parallax: true, // 시간 차 움직임
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".main-page-no",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 두번째 스와이퍼
const subSwiper = new Swiper(".sub-swiper", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".sub-page-no",
    type: "fraction",
  },
});