
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
        $('.experience').eq(idx).append(experienceData);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log('AJAX 요청 실패:', xhr, status, error);
  }
});
// 후기
$.ajax({
  url: "./assets/DB/review-data-list.json",
  dataType: "json",
  success: (data) => {
    if (data) {
      $.each(data, (idx, elem) => {
        const reviewData = `
          <img src=${elem.imgUrl} alt="emoji-icon">
          <p class="parents">${elem.parents}</p>
          <p class="review-desc">${elem.reviewDesc}</p>
          <p class="location">${elem.location}</p>
          <p class="name">${elem.name}<span>${elem.spanName}</span></p>
          `;
        $('.card-list').eq(idx).append(reviewData);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log('AJAX 요청 실패:', xhr, status, error);
  }
});