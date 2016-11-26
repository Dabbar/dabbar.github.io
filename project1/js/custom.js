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
    var documentScroll = $(this).scrollTop();
    if (documentScroll > headerHeight) {
      $('#js-nav').addClass('fixed');
    } else {
      $('#js-nav').removeClass('fixed');
    }
  })
  
  
});