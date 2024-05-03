$(function () {
  /* 대메뉴에 마우스를 올리면, 소메뉴가 내려옴
  $('.global-menu > li').on('mouseenter', () => {
    $('.global-menu .sub-menu').stop().slideDown();
  });
  $('.global-menu > li').on('mouseleave', () => {
    $('.global-menu .sub-menu').stop().slideUp();
  });

  $('.global-menu > li').on({
    'mouseenter' : () => {
      $('.global-menu .sub-menu').stop().slideDown();
    },
    'mouseleave' : () => {
      $('.global-menu .sub-menu').stop().slideUp();
    }
  });
  */

  $('.global-menu > li > a').on({
    'mouseenter' : (e) => {
      // $(e.target).next().stop().slideDown();
      $('.global-menu .sub-menu').stop().slideDown();
    },
    'mouseleave' : () => {
      $('.global-menu .sub-menu').stop().slideUp();
    }
  });
});