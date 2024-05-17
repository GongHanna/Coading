// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#').on('click', (e) => {
  e.preventDefault();
});

// 각 박스 안에 움직이는 이미지 
const movedImg = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  $('.box2-left').css({ left: -200 - x / 60, top : 50 - y / 30})
  $('.box2-right').css({ right: -50 + x / 30, bottom : -50 + y / 60})

  $('.box3-left').css({ left: -200 - x / 60, top : 50 - y / 40})
  $('.box3-right').css({ right: -50 + x / 60, bottom : -50 + y / 30})

  $('.box4-left').css({ left: -200 - x / 50, top : 50 - y / 50})
  $('.box4-right').css({ right: -50 + x / 50, bottom : -50 - y / 60})

  requestAnimationFrame(movedImg);
}
$('.box').on('mousemove', movedImg);


$(window).on('scroll', () => {
  // 로고 컬러 변경
  const box1PTop = $('.txt-wrapper p').offset().top;
  console.log(box1PTop);
  /*
  if(scrollY > box1PTop) {
    $('header').addClass('colorChange');
  } else {
    $('header').removeClass('colorChange');
  }
  */
  $('header').toggleClass('colorChange', scrollY > box1PTop);

  // 해당 박스로 이동하면 내비에 .active 붙음
});

// 내비 메뉴 클릭 시 해당 박스로 부드럽게 이동
$('.side-menu li').on('click', (e) => {
  const idx = $(e.currentTarget).index();
  const currentBox = 100 * idx;
  console.log(currentBox);

  scrollTo({
    top: `${currentBox}vh`,
    behavior: 'smooth'
  });
});