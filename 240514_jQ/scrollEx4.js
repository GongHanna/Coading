// 로고 클릭시 맨 위로 이동
$('header .title strong').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// 스크롤에 따른 header 변화
// addEventListener('scroll', () => {})
$(window).on('scroll', () => {
  let box1 = $('.box1').offset().top;
  console.log(box1);
  // const articleHt = document.querySelector('article').offsetHeight;
  const headerHt = $('header').outerHeight(); // margin을 제외한 요소의 실제 크기
  console.log(headerHt);
  console.log($('header').height());

  if(scrollY > box1) {
    $('header').addClass('active');
    $('article').css({height: `calc(100vh - ${headerHt}px)`});
  } else {
    $('header').removeClass('active');
    $('article').css({height: `calc(100vh - ${headerHt}px)`});
  }
});

// 해당 박스로 부드러운 이동
/*
$('.global-menu li:nth-child(1) a').on('click', (e) => {
  e.preventDefault();

  scrollTo({
    top: $('.box1').offset().top - $('header').height(),
    behavior: 'smooth'
  });
});

여러 요소를 순차적으로 순회
JS :
array.forEach(elem => {});
[a[0],a[1],a[2],a[3]].forEach(a => {});

jQuery :
$.each(배열 혹은 객체, 콜백함수);
배열인 경우 인덱스, 값 순서로 인자를 받음
$.each(((index, value) => {}));
*/
$('.global-menu a').each(function(idx, elem) {
  // console.log(`index: ${idx}, value: ${elem}`);
  $(elem).on('click', (e) => {
    e.preventDefault();

    const getArticle = $('article').eq(idx).offset().top - $('header').height();
    scrollTo({
      top: getArticle,
      behavior: 'smooth'
    });
  });
});

// 모바일 토글 버튼 
$('.mobile-button').on('click', (e) => {
  $(e.target).toggleClass('toggle-btn');
  $('.global-menu').toggleClass('show-menu');

  // 각각의 메뉴를 클릭하면 해당 되는 페이지로 이동하고 메뉴 닫힘
  $('.global-menu li').each( (index, li) => {
    $(li).on('click', () => {
      $('.mobile-button').removeClass('toggle-btn');
      $('.global-menu').removeClass('show-menu');
    });
  });
});
