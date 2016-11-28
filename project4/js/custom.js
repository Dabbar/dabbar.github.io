$('.js-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000
});

$('.js-slider-prev').on('click', function () {
  $('.js-carousel').slick('slickPrev');
});

$('.js-slider-next').on('click', function () {
  $('.js-carousel').slick('slickNext');
});
