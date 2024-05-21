$('a[href="#"]').on('click', e => e.preventDefault() );

/* 
로딩 이벤트
setTimeout(() => $('.loader-container').addClass('loader-hide'), 0),
setTimeout(() => $('.loader-container').removeClass('loader-hide'), 2500);
*/

// 문서를 다 불러오면 로딩이 끝나게 설정
function hideLoader () {
  $('.loader-container').addClass('loader-hide');
}
window.addEventListener('load', hideLoader);

// .box4 .list-items li a .item-bg, data-bg 순차적으로 적용
$('.box4 .list-items .list-item').each((idx, elem) => {
  const bgColor = $(elem).data('bg');
  $(elem).find('.item-bg').css({ backgroundColor: bgColor });
});