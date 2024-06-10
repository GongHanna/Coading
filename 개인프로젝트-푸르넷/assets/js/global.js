// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

// 로고 클릭 시 페이지 맨 위로 이동
$(".header .logo").on("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// .global-menu에 마우스를 올리면 .sub-menu가 내려옴
$(".header .global-menu").on({
  mouseenter: () => {
    $(".global-menu .sub-menu").stop().slideDown();
  },
  mouseleave: () => {
    $(".global-menu .sub-menu").stop().slideUp();
  },
});
