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
