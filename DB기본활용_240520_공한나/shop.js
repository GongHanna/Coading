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

// 상품 배치 드롭다운 메뉴 
$('.btn-arrange').on('click', () => {
  $('.btn-arrange .category').toggleClass('show');
});


// 더보기 버튼 클릭 시 상품 추가 나열
$('.sub-shop-wrapper .more-btn').on('click', (e) => {
  e.preventDefault();
  $('.sub-shop-wrapper .hidden').addClass('show-list');
  $(e.target).hide();
});

// Ajax
$.ajax({
  url: "https://javascript-team-project.github.io/javaScriptTeamProject/shop-list-data.json",
  dataType: "json",
  success: (data) => {
    if (data) {
      $.each(data, (idx, elem) => {
        const shopList = `
            <img src=${elem.url} alt="img" class="main-img">
            <img src=${elem.hover} alt="img" class="hover-img">
            <h3>${elem.title}</h3>
            <p>${elem.discount} <strong>${elem.discountPrice}</strong> <span>${elem.price}</span></p>
          `;
        $('.product li').eq(idx).append(shopList);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log('AJAX 요청 실패:', xhr, status, error);
  }
});




