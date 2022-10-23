$('.buy__subscribe').click(function(e) {
  e.preventDefault();
  $('.form__popup').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.form__popup').fadeOut(800);
  $('html').removeClass('no-scroll');
});