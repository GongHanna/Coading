// 첫번째 자동 슬라이드
const mainSwiper = new Swiper(".main-swiper", {
  speed: 600,
  loop: true,
  parallax: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 'auto', // 슬라이드 너비에 따라 자동으로 조정
  slidesPerGroup: 1, // 한 번에 하나의 슬라이드만 이동
  spaceBetween: 50, // 슬라이드 간의 간격
  centeredSlides: true, // 중앙 슬라이드 활성화
  on: {
    init: function() {
      setSlideWidths();
    },
    resize: function() {
      setSlideWidths();
    },
    update: function() {
      setSlideWidths();
    },
  }
});

function setSlideWidths() {
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.style.width = '497px'; // width를 고정된 값으로 설정
  });
}

// active가 있으면 li의 data-bg 적용
// $('.side-menu li').each( function() {
//   const bgColor = $(this).data('bg');
//   const isBg = $(this).hasClass('active');
//   $(this).find('.dot').css({ backgroundColor : isBg ? bgColor : 'transparent'});
// });


// 스크롤 시 숫자 카운트 이벤트
$(window).on('scroll', function() {
  const mainHt = $('.main-contents').offset().top * 0.9;

  if ($(window).scrollTop() > mainHt) {
    $('.num-count').each(function() {
      const $this = $(this);
      if (!$this.data('animated')) {
        const endNumber = parseInt($this.data('end'), 10);
        animateNumber($this, 0, endNumber);
        $this.data('animated', true);
      }
    });
  } else {
    // 스크롤이 다시 위로 올라갈 경우 애니메이션 초기화
    $('.company-introduction .intro-list .num-count').each(function() {
      $(this).data('animated', false);
    });
  }
});

function animateNumber($element, start, end) {
  $({ Counter: start }).animate({ Counter: end }, {
    duration: 1000,
    easing: 'swing',
    step: function (now) {
      $element.text(Math.floor(now));
    },
    complete: function() {
      $element.text(end);
    }
  });
}

// Ajax
// 이미지 슬라이드
$.ajax({
  url: "./assets/DB/free-experience-data-list.json",
  dataType: "json",
  success: (data) => {
    if (data) {
      $.each(data, (idx, elem) => {
        const experienceData = `
            <h2 class="title">${elem.title}</h2>
            <p class="des">${elem.desc}</p>
            <div class="img-wrapper">
              <img src=${elem.imgUrl} alt=${elem.title}>
            </div>
            <a href="# " class="application-btn">${elem.btn}</a>
          `;
        $(".experience").eq(idx).append(experienceData);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log("AJAX 요청 실패:", xhr, status, error);
  },
});
// 후기
$.ajax({
  url: "./assets/DB/review-data-list.json",
  dataType: "json",
  success: (data) => {
    if (data) {
      $.each(data, (idx, elem) => {
        const reviewData = `
          <p class="parents">
            <img src=${elem.imgUrl} alt="emoji-icon">
            ${elem.parents}
          </p>
          <p class="review-desc">${elem.reviewDesc}</p>
          <p class="location">${elem.location}</p>
          <p class="name">${elem.name}<span>${elem.spanName}</span></p>
          `;
        $(".card-list").eq(idx).append(reviewData);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log("AJAX 요청 실패:", xhr, status, error);
  },
});
