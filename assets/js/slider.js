$(document).ready(function () {
  const previousArrow = `
    <button class="slick-arrow slick-prev">
        <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            >
            <path
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            ></path>
        </svg>
    </button>
    `;

  const nextArrow = `
    <button class="slick-arrow slick-next">
        <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            >
            <path
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
            ></path>
            </svg>
    </button>
    `;

  $('.featured-image').slick({
    infinite: true,
    arrows: false,
    fade: true,
    draggable: true,
    asNavFor: '.images',
  });

  let imageCount = $('.images').find('img').length;
  if (imageCount >= 6) {
    // 5-ზე მეტ სლაიდს არ აჩვენებს
    imageCount = 6;
  }

  $('.images').slick({
    infinite: true,
    slidesToShow: imageCount > 1 ? imageCount - 1 : 1,
    slidesToScroll: 1,
    asNavFor: '.featured-image',
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: imageCount > 3 ? 3 : imageCount - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: imageCount > 2 ? 2 : imageCount - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  console.log(imageCount);
});
