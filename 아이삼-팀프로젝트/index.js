// 로딩 페이지 화면
setTimeout(() => $('.loading-page').removeClass('hide'), 0),
setTimeout(() => $('.loading-page').addClass('hide'), 1000);

// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on('click', (e) => {
  e.preventDefault();
});

// 마우스 따라 움직이는 눈
$(document).mousemove(function (event) {
  $('.eye').each(function () {
    const eye = $(this);
    const centerX = eye.offset().left + eye.width() / 2;
    const centerY = eye.offset().top + eye.height() / 2;

    const angle = Math.atan2(event.pageY - centerY, event.pageX - centerX);
    const rotateDeg = angle * (180 / Math.PI) + 90;

    eye.css('transform', `rotate(${rotateDeg}deg)`);
  });
});

// 메인 페이지 드래그 이벤트
$('.draggable').draggable();


// 스크롤 이벤트
$(window).on('scroll', () => {

  // 스크롤시 헤더 변경
  if (scrollY > 100) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }

  // 스크롤이 이벤트 박스에 도착했을 때 텍스트 하나씩 나열
  const brandHt = $('.brand-intro-wrapper').offset().top * 0.9;
  if (scrollY > brandHt) {
    $('.event-wrapper .event-box .event-title').addClass('scroll');

    const waveElements = document.querySelectorAll('.wave-text');

    let delay = 0;
    waveElements.forEach((wave) => {
      const text = wave.textContent;
      wave.innerHTML = '';

      text.split('').forEach((letter) => {

        const span = document.createElement('span');

        span.textContent = letter;

        if (letter !== ' ') {
          span.style.animationDelay = `${delay}ms`;
          span.classList.add('letter');
          delay += 40; // 각 문자당 50ms 딜레이
        }

        wave.appendChild(span);
      });
    });
  } else {
    $('.event-wrapper .event-box .event-title').removeClass('scroll');
  }

  // lovecall edition에 스크롤 시 svg 차례대로 그려짐
  const youtubeHt = $('.event-wrapper img').offset().top * 0.8;
  if (scrollY > youtubeHt) {
    $('.youtube-wrapper .edition-box .edition-main-title .edition-arrow').addClass('edition-evnet');
  } else {
    $('.youtube-wrapper .edition-box .edition-main-title .edition-arrow').removeClass('edition-evnet');
  }

});

// 로고 클릭 시 페이지 맨 위로 이동
$('header .logo a[href="#"]').on('click', (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// header에 마우스 허버시 svg 그려지고, 'a'의 투명도 1
$('header .global-menu li').hover(
  function () {
    $(this).find('a').css('opacity', 1);
    $(this).find('svg').addClass('event');
  },
  function () {
    $(this).find('a').css('opacity', '');
    $(this).find('svg').removeClass('event');
  }
);

// 자동으로 브랜드 소개 넘겨지기
const $slideBtns = $('.brand-intro-wrapper .slide-button li');
let currentIdx = 0;
const $slides = $('.slide-wrapper .slide-item');
const slideCount = $slides.length;
let mainSlide;

// 사용자가 페이지네이션 버튼을 클릭할 때마다 해당 슬라이드로 이동
$slideBtns.on('click', (e) => {
  const $target = $(e.target);
  const idx = $target.index();

  $('.slide-wrapper').stop().animate({
    marginLeft: -100 * idx + '%'
  }, 700);

  $slideBtns.removeClass('active');
  $target.addClass('active');

  currentIdx = idx;
});
// 일정 시간마다 자동으로 슬라이드를 전환하는 역할
const autoSlide = () => {
  currentIdx = (currentIdx + 1) % slideCount;

  $('.slide-wrapper').stop().animate({
    marginLeft: -100 * currentIdx + '%'
  }, 700);

  $slideBtns.eq(currentIdx).addClass('active').siblings().removeClass('active');
};

// 뷰포트의 너비가 변경될 때마다 자동 슬라이드 상태 업데이트
$(window).on('resize', function () {
  if (800 >= $(window).width()) {
    clearInterval(mainSlide);
    mainSlide = setInterval(autoSlide, 3000);
  } else {
    clearInterval(mainSlide);
  }
}).trigger('resize'); // 페이지 로드시 한번 실행

