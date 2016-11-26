$(function () {

  //Scroll to pricing
  $('#js-get-started').on('click', function () {
    var pricingOffset = $('#js-pricing').offset().top;
    $('html, body').animate({
      scrollTop: pricingOffset
    }, 1000);
  });

  //Fix nav on scroll
  var headerHeight = $('#js-banner').height() + $('#js-header-wrapper').height();
  $(document).on('scroll', function () {
    var documentScroll = $(this).scrollTop() + 40;
    if (documentScroll > headerHeight) {
      $('#js-nav').addClass('fixed');
    } else {
      $('#js-nav').removeClass('fixed');
    }
  });

  //Smooth scroll to links
  $('.header_nav a').on('click', function (e) {
    e.preventDefault();

    var currentBlock = $(this).attr('href');
    var currentBlockOffset = $(currentBlock).offset().top;

    $('html, body').animate({
      scrollTop: currentBlockOffset - 50
    }, 1000);
  })
});