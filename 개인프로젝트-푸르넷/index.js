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
  document.querySelectorAll('.main-swiper .swiper-slide').forEach(slide => {
    slide.style.width = '497px'; // width를 고정된 값으로 설정
  });
}

// 이미지 슬라이드
const imgSwiper = new Swiper(".img-swiper", {
  speed: 600,
  parallax: true, // 시간 차 움직임
  navigation: {
    nextEl: ".new-video-swiper-button-next",
    prevEl: ".new-video-swiper-button-prev",
  },
  slidesPerView: 'auto', // 슬라이드 너비에 따라 자동으로 조정
  slidesPerGroup: 1,
  spaceBetween: 0, // 슬라이드 간의 간격
  on: {
    init: function() {
      setImgSlideWidths();
    },
  }
});

function setImgSlideWidths() {
  document.querySelectorAll('.img-swiper .slide-wrapper .swiper-slide').forEach(slide => {
    slide.style.width = '100vw';
  });
}

// 기존 네비게이션 버튼 숨기기
document.querySelector('.swiper-button-next').style.display = 'none';
document.querySelector('.swiper-button-prev').style.display = 'none';

document.querySelector('.new-swiper-button-prev').addEventListener('click', function () {
  imgSwiper.slidePrev(); // 이전 슬라이드로 이동
});

document.querySelector('.new-swiper-button-next').addEventListener('click', function () {
  imgSwiper.slideNext(); // 다음 슬라이드로 이동
});

// 슬라이드 버튼 색상 변경


// 비디오 슬라이드
// const videoSwiper = new Swiper(".video-swiper", {
//   speed: 600,
//   parallax: true,
//   navigation: {
//     nextEl: ".new-video-swiper-button-next",
//     prevEl: ".new-video-swiper-button-prev",
//   },
//   slidesPerView: 'auto', // 슬라이드 너비에 따라 자동으로 조정
//   slidesPerGroup: 1,
//   spaceBetween: 0, // 슬라이드 간의 간격
//   on: {
//     init: function() {
//       setVideoSlideWidths();
//     },
//   }
// });

// function setVideoSlideWidths() {
//   document.querySelectorAll('.video-swiper .swiper-slide').forEach(slide => {
//     slide.style.width = '100%';
//   });
// }

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
